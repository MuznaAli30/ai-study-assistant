import os
from threading import Lock
from typing import Dict, List, Literal, TypedDict

import requests
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from database import Base, engine

load_dotenv()

app = FastAPI()

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL_NAME = "openai/gpt-3.5-turbo"


class ChatMessage(TypedDict):
    role: Literal["user", "assistant"]
    content: str


# In-memory session store: {session_id: [{role, content}, ...]}
chat_history_store: Dict[str, List[ChatMessage]] = {}
history_lock = Lock()


# 👉 This is the shape of data we will receive from frontend
class ChatRequest(BaseModel):
    message: str = Field(..., description="User message text")
    # Optional so existing frontend payload still works.
    session_id: str | None = Field(
        default=None,
        description="Unique session identifier for chat memory",
    )


@app.get("/")
def home():
    return {"message": "AI Backend is working 🚀"}


@app.post("/chat")
def chat(req: ChatRequest):
    if not OPENROUTER_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="OPENROUTER_API_KEY is missing in environment variables.",
        )

    user_message = req.message.strip()
    if not user_message:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Message cannot be empty.",
        )

    session_id = (req.session_id or "default").strip() or "default"

    with history_lock:
        if session_id not in chat_history_store:
            chat_history_store[session_id] = []
        chat_history_store[session_id].append(
            {"role": "user", "content": user_message}
        )
        messages = list(chat_history_store[session_id])

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
    }

    data = {
        "model": MODEL_NAME,
        "messages": messages,
    }

    try:
        response = requests.post(
            OPENROUTER_URL,
            headers=headers,
            json=data,
            timeout=30,
        )
        response.raise_for_status()
        response_json = response.json()
    except requests.exceptions.RequestException as exc:
        # Roll back the user message if upstream call failed.
        with history_lock:
            if chat_history_store.get(session_id):
                chat_history_store[session_id].pop()
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=f"OpenRouter API request failed: {str(exc)}",
        ) from exc

    try:
        assistant_message = response_json["choices"][0]["message"]["content"].strip()
    except (KeyError, IndexError, TypeError) as exc:
        # Roll back the user message if response shape is invalid.
        with history_lock:
            if chat_history_store.get(session_id):
                chat_history_store[session_id].pop()
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="Invalid response format received from OpenRouter API.",
        ) from exc

    if not assistant_message:
        with history_lock:
            if chat_history_store.get(session_id):
                chat_history_store[session_id].pop()
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="OpenRouter returned an empty assistant response.",
        )

    with history_lock:
        chat_history_store[session_id].append(
            {"role": "assistant", "content": assistant_message}
        )

    return {"response": assistant_message}