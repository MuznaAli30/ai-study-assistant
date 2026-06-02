const AI_REACTIONS = ["✨", "💡", "🌟", "💜", "📚", "🎯", "💫"];

type ChatBubbleProps = {
  role: "user" | "assistant";
  content: string;
  index: number;
};

export function ChatBubble({ role, content, index }: ChatBubbleProps) {
  const isUser = role === "user";
  const reaction = AI_REACTIONS[index % AI_REACTIONS.length];

  return (
    <article
      className={`animate-fade-in-up flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
      style={{ animationDelay: `${Math.min(index * 0.06, 0.35)}s` }}
    >
      {!isUser && (
        <div
          className="sticker-glow mr-2.5 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-violet-400/25 bg-zinc-800/90 text-lg shadow-lg backdrop-blur-md transition hover:scale-105"
          aria-hidden="true"
        >
          🤖
        </div>
      )}

      <div
        className={`group relative max-w-[88%] px-4 py-3.5 text-sm leading-relaxed transition-all duration-300 hover:-translate-y-0.5 sm:max-w-[78%] sm:text-[0.9375rem] ${
          isUser
            ? "rounded-[1.25rem] rounded-br-md bg-gradient-to-br from-[#a78bfa] via-purple-500 to-[#f472b6] text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-fuchsia-500/25"
            : "rounded-[1.25rem] rounded-bl-md border border-zinc-600/50 bg-zinc-800/80 text-zinc-100 shadow-lg shadow-black/30 backdrop-blur-xl hover:border-violet-400/30 hover:bg-zinc-800/95 hover:shadow-violet-500/10"
        }`}
      >
        <p>{content}</p>
        {!isUser && (
          <span
            className="sticker-glow mt-2 block text-right text-xl"
            aria-hidden="true"
          >
            {reaction}
          </span>
        )}
      </div>

      {isUser && (
        <div
          className="sticker-glow ml-2.5 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-fuchsia-400/30 bg-gradient-to-br from-[#a78bfa] to-[#f472b6] text-lg shadow-lg transition hover:scale-105"
          aria-hidden="true"
        >
          🎓
        </div>
      )}
    </article>
  );
}
