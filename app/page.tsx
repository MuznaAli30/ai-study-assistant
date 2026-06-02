"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { ChatBubble } from "./components/ChatBubble";
import { ChatInput } from "./components/ChatInput";
import { FloatingStickers } from "./components/FloatingStickers";
import { HeroSection } from "./components/HeroSection";
import { MotivationalFooter } from "./components/MotivationalFooter";
import { TypingIndicator } from "./components/TypingIndicator";

type MessageRole = "user" | "assistant";

type Message = {
  role: MessageRole;
  content: string;
};

type ChatApiResponse = {
  response: string;
};

const SUGGESTIONS = [
  "Explain photosynthesis like I'm 12 🌱",
  "Quiz me on World War II history",
  "Help me memorize the periodic table",
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const hasMessages = messages.length > 0;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmedInput }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = (await response.json()) as ChatApiResponse;
      const assistantContent =
        data.response?.trim() ||
        "Sorry, I couldn't generate a response.";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: assistantContent,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I couldn't reach the assistant service. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendMessage();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      void sendMessage();
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <FloatingStickers />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col">
        <HeroSection compact={hasMessages} />

        <section className="chat-scroll flex-1 overflow-y-auto px-4 pb-2 sm:px-6">
          <div className="mx-auto w-full max-w-3xl">
            <div className="rounded-[1.75rem] border border-violet-400/20 bg-zinc-900/60 p-4 shadow-2xl shadow-violet-500/10 backdrop-blur-2xl sm:rounded-3xl sm:p-5">
              <div className="flex flex-col gap-4">
                {!hasMessages && (
                  <div className="animate-fade-in-up rounded-2xl border border-violet-400/20 bg-zinc-800/50 p-6 text-center shadow-inner sm:p-8">
                    <p className="sticker-glow text-5xl" aria-hidden="true">
                      👋✨
                    </p>
                    <p className="mt-3 text-base font-semibold text-zinc-100">
                      Hey bestie, ready to study?
                    </p>
                    <p className="mt-1.5 text-sm text-zinc-400">
                      Drop a question below — your AI buddy&apos;s got you 💜
                    </p>
                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      {SUGGESTIONS.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => setInput(suggestion)}
                          className="rounded-full border border-violet-400/30 bg-zinc-800/80 px-3.5 py-2 text-xs font-medium text-violet-200 shadow-sm transition hover:-translate-y-0.5 hover:border-fuchsia-400/50 hover:bg-zinc-700/80 hover:shadow-md hover:shadow-violet-500/10 sm:text-sm"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((message, index) => (
                  <ChatBubble
                    key={`${message.role}-${index}`}
                    role={message.role}
                    content={message.content}
                    index={index}
                  />
                ))}

                {isLoading && <TypingIndicator />}

                <div ref={bottomRef} />
              </div>
            </div>
          </div>
        </section>

        <ChatInput
          input={input}
          isLoading={isLoading}
          onInputChange={setInput}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        />

        <MotivationalFooter />
      </main>
    </div>
  );
}
