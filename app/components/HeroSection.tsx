type HeroSectionProps = {
  compact?: boolean;
};

export function HeroSection({ compact = false }: HeroSectionProps) {
  if (compact) {
    return (
      <header className="animate-fade-in-up flex items-center justify-center gap-2 px-4 py-3 sm:gap-3">
        <span className="sticker-glow text-2xl sm:text-3xl" aria-hidden="true">
          ✨
        </span>
        <div className="text-center">
          <h1 className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300 bg-clip-text text-base font-bold tracking-tight text-transparent sm:text-lg">
            AI Study Buddy
          </h1>
          <p className="text-[11px] text-zinc-400 sm:text-xs">
            Stress nothing. Learn everything. 📚
          </p>
        </div>
        <span className="sticker-glow text-2xl sm:text-3xl" aria-hidden="true">
          🎓
        </span>
      </header>
    );
  }

  return (
    <header className="animate-fade-in-up px-4 pt-6 pb-3 text-center sm:pt-8 sm:pb-4">
      <div className="mx-auto mb-4 flex max-w-sm items-center justify-center gap-3 sm:mb-5 sm:max-w-md sm:gap-5">
        <span
          className="sticker-glow animate-float-drift text-5xl sm:text-6xl"
          style={{ animationDelay: "0.3s" }}
          aria-hidden="true"
        >
          📚
        </span>
        <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.75rem] border border-violet-400/30 bg-zinc-900/70 shadow-xl shadow-violet-500/20 backdrop-blur-xl sm:h-24 sm:w-24 sm:rounded-3xl">
          <span className="sticker-glow text-5xl sm:text-6xl" aria-hidden="true">
            🧠
          </span>
          <span
            className="sticker-glow animate-float absolute -right-3 -top-2 text-2xl sm:text-3xl"
            style={{ animationDelay: "0.5s" }}
            aria-hidden="true"
          >
            ✨
          </span>
          <span
            className="sticker-glow animate-float-alt absolute -bottom-2 -left-3 text-xl sm:text-2xl"
            style={{ animationDelay: "1.2s" }}
            aria-hidden="true"
          >
            💡
          </span>
          <span
            className="sticker-glow animate-float-drift absolute -bottom-1 right-[-1.25rem] text-xl sm:text-2xl"
            style={{ animationDelay: "2s" }}
            aria-hidden="true"
          >
            🪐
          </span>
        </div>
        <span
          className="sticker-glow animate-float-alt text-5xl sm:text-6xl"
          style={{ animationDelay: "0.9s" }}
          aria-hidden="true"
        >
          🚀
        </span>
      </div>

      <h1 className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-sky-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-[2.75rem]">
        ✨ AI Study Buddy
      </h1>

      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-300 sm:max-w-lg sm:text-base">
        Your cute smart learning companion that helps you study, understand, and
        grow 📚✨
      </p>

      <p className="mt-3 text-xs font-medium italic tracking-wide text-fuchsia-300/90 sm:text-sm">
        Ask anything. Learn everything. Stress nothing.
      </p>

      <div className="mt-5 inline-flex animate-glow-pulse items-center gap-2 rounded-full border border-violet-400/30 bg-zinc-900/60 px-4 py-2 text-xs font-semibold text-violet-200 shadow-lg shadow-violet-500/20 backdrop-blur-md sm:text-sm">
        <span className="sticker-glow text-base" aria-hidden="true">
          🚀
        </span>
        <span>Powered by AI • Built for students</span>
        <span className="sticker-glow text-base" aria-hidden="true">
          ✨
        </span>
      </div>
    </header>
  );
}
