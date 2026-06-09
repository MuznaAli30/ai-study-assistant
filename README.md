# 📚 AI Study Assistant

An AI-powered Study Assistant built with Next.js (Frontend) and FastAPI (Backend) using OpenRouter LLMs. This project helps students ask questions and get instant AI-generated explanations like a tutor.

## ✨ Features
- Chat with AI in real-time
- AI-powered answers using OpenRouter API
- Fast and responsive UI (Next.js)
- Clean ChatGPT-like interface
- Auto-scroll chat system
- "AI is typing..." loading state
- Fully responsive design
- Backend powered by FastAPI (Python)

## 🧠 Tech Stack

Frontend:
- Next.js
- TypeScript
- Tailwind CSS
- React Hooks

Backend:
- FastAPI
- Python
- OpenRouter API (LLM integration)
- Pydantic

## ⚙️ How It Works

User → Frontend (Next.js) → FastAPI Backend → OpenRouter LLM → AI Response → Frontend UI

## 📁 Project Structure

ai-study-assistant/
├── backend/

│   ├── main.py

│   ├── database.py (optional if added)

│   ├── models.py (optional if added)

│   └── .env
│
├── frontend/

│   ├── app/

│   │   └── page.tsx

│   ├── components/

│   └── styles/
│
└── README.md

## 🚀 API Endpoint

POST /chat

Request:
{
  "message": "Explain React JS"
}

Response:
{
  "response": "React is a JavaScript library..."
}

## 💡 What I Learned
- Full-stack AI application development
- Connecting Python backend with Next.js frontend
- Working with LLM APIs (OpenRouter)
- Handling CORS issues
- API request/response handling
- Building chat UI systems

## 🎯 Future Improvements
- Chat history with database
- User authentication
- PDF/document upload support
- AI study modes (notes, summaries)
- Cloud deployment

## 🧑‍💻 Author
Built by Muzna Ali Siddiqui

## 📌 Note
This project is for learning full-stack AI development using modern tools.
