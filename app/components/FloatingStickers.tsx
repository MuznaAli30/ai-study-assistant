type Sticker = {
  emoji: string;
  top: string;
  left?: string;
  right?: string;
  size: string;
  delay: string;
  animation: "float" | "float-alt" | "drift";
  vivid?: boolean;
};

const STICKERS: Sticker[] = [
  { emoji: "📚", top: "4%", left: "3%", size: "text-4xl sm:text-6xl", delay: "0s", animation: "drift", vivid: true },
  { emoji: "✨", top: "12%", right: "6%", size: "text-2xl sm:text-4xl", delay: "1.5s", animation: "float-alt" },
  { emoji: "🎓", top: "22%", left: "12%", size: "text-3xl sm:text-5xl", delay: "0.8s", animation: "float", vivid: true },
  { emoji: "🧠", top: "38%", right: "4%", size: "text-4xl sm:text-6xl", delay: "2.2s", animation: "drift", vivid: true },
  { emoji: "💡", top: "52%", left: "5%", size: "text-3xl sm:text-4xl", delay: "1s", animation: "float-alt" },
  { emoji: "🚀", top: "64%", right: "10%", size: "text-3xl sm:text-5xl", delay: "3s", animation: "float", vivid: true },
  { emoji: "⭐", top: "8%", left: "45%", size: "text-2xl sm:text-3xl", delay: "2.5s", animation: "drift" },
  { emoji: "☁️", top: "18%", left: "72%", size: "text-3xl sm:text-5xl", delay: "0.4s", animation: "float-alt" },
  { emoji: "🌙", top: "30%", right: "18%", size: "text-3xl sm:text-4xl", delay: "1.8s", animation: "drift", vivid: true },
  { emoji: "🪐", top: "48%", left: "82%", size: "text-3xl sm:text-5xl", delay: "2.8s", animation: "float" },
  { emoji: "✨", top: "58%", left: "38%", size: "text-2xl sm:text-3xl", delay: "4s", animation: "float-alt" },
  { emoji: "📚", top: "76%", left: "8%", size: "text-3xl sm:text-4xl", delay: "1.2s", animation: "drift" },
  { emoji: "🎓", top: "84%", right: "22%", size: "text-2xl sm:text-4xl", delay: "0.6s", animation: "float" },
  { emoji: "💡", top: "70%", left: "58%", size: "text-2xl sm:text-3xl", delay: "3.5s", animation: "float-alt", vivid: true },
  { emoji: "⭐", top: "42%", left: "22%", size: "text-2xl sm:text-3xl", delay: "2s", animation: "drift" },
  { emoji: "☁️", top: "88%", right: "6%", size: "text-3xl sm:text-4xl", delay: "1.4s", animation: "float-alt" },
  { emoji: "🧠", top: "92%", left: "42%", size: "text-2xl sm:text-3xl", delay: "2.6s", animation: "float" },
  { emoji: "🪐", top: "15%", left: "88%", size: "text-2xl sm:text-4xl", delay: "3.2s", animation: "drift", vivid: true },
  { emoji: "🌙", top: "62%", right: "28%", size: "text-2xl sm:text-3xl", delay: "0.2s", animation: "float-alt" },
  { emoji: "🚀", top: "35%", left: "52%", size: "text-2xl sm:text-3xl", delay: "4.5s", animation: "drift" },
];

const animationClass: Record<Sticker["animation"], string> = {
  float: "animate-float",
  "float-alt": "animate-float-alt",
  drift: "animate-float-drift",
};

export function FloatingStickers() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {STICKERS.map((sticker, index) => (
        <span
          key={`${sticker.emoji}-${index}`}
          className={`sticker-glow absolute select-none ${sticker.size} ${animationClass[sticker.animation]} ${
            sticker.vivid
              ? "opacity-[0.55] sm:opacity-[0.65]"
              : "opacity-[0.42] sm:opacity-[0.52]"
          }`}
          style={{
            top: sticker.top,
            left: sticker.left,
            right: sticker.right,
            animationDelay: sticker.delay,
          }}
        >
          {sticker.emoji}
        </span>
      ))}
    </div>
  );
}
