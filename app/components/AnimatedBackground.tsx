export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#0f0a1a] to-slate-950 animate-gradient-shift" />

      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#a78bfa]/20 blur-3xl" />
      <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-[#f472b6]/15 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#60a5fa]/15 blur-3xl" />
      <div className="absolute right-1/3 top-2/3 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.08),transparent_50%)]" />
    </div>
  );
}
