export function MotivationalFooter() {
  return (
    <footer className="animate-fade-in-up relative z-10 px-4 pb-5 pt-2 text-center sm:pb-6">
      <p className="text-xs font-medium tracking-wide text-zinc-400 sm:text-sm">
        Keep learning, you&apos;re doing amazing 💜
      </p>
      <div
        className="mt-2 flex justify-center gap-3 text-xl sm:text-2xl"
        aria-hidden="true"
      >
        <span className="sticker-glow animate-float" style={{ animationDelay: "0s" }}>
          ✨
        </span>
        <span
          className="sticker-glow animate-float-alt"
          style={{ animationDelay: "0.5s" }}
        >
          📚
        </span>
        <span className="sticker-glow animate-float" style={{ animationDelay: "1s" }}>
          🌟
        </span>
      </div>
    </footer>
  );
}
