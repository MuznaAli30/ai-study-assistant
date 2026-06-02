export function TypingIndicator() {
  return (
    <article className="animate-fade-in-up flex justify-start">
      <div
        className="sticker-glow mr-2.5 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-violet-400/25 bg-zinc-800/90 text-lg shadow-lg backdrop-blur-md"
        aria-hidden="true"
      >
        🤖
      </div>
      <div className="rounded-[1.25rem] rounded-bl-md border border-zinc-600/50 bg-zinc-800/80 px-5 py-4 shadow-lg shadow-black/30 backdrop-blur-xl">
        <div className="flex items-center gap-2" aria-label="AI is typing">
          <span className="h-2.5 w-2.5 rounded-full bg-[#a78bfa] animate-shimmer" />
          <span
            className="h-2.5 w-2.5 rounded-full bg-[#f472b6] animate-shimmer"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="h-2.5 w-2.5 rounded-full bg-[#60a5fa] animate-shimmer"
            style={{ animationDelay: "0.4s" }}
          />
          <span className="ml-1 text-xs font-medium text-zinc-400">
            thinking...
          </span>
        </div>
      </div>
    </article>
  );
}
