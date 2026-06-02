import { FormEvent, KeyboardEvent } from "react";

type ChatInputProps = {
  input: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export function ChatInput({
  input,
  isLoading,
  onInputChange,
  onSubmit,
  onKeyDown,
}: ChatInputProps) {
  const canSend = !isLoading && input.trim().length > 0;

  return (
    <footer className="sticky bottom-0 z-20 px-4 pb-3 pt-2 sm:px-6 sm:pb-5">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent" />

      <form
        onSubmit={onSubmit}
        className="input-glow relative mx-auto flex w-full max-w-3xl items-center gap-2 rounded-full border border-violet-400/25 bg-zinc-900/85 p-1.5 pl-4 shadow-2xl shadow-violet-500/15 backdrop-blur-2xl transition-all duration-300 sm:gap-3 sm:p-2 sm:pl-5"
      >
        <span className="sticker-glow shrink-0 text-xl" aria-hidden="true">
          💬
        </span>

        <input
          type="text"
          value={input}
          onChange={(event) => onInputChange(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask me anything about studying... 📚✨"
          disabled={isLoading}
          className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-60 sm:py-3 sm:text-base"
        />

        <button
          type="submit"
          disabled={!canSend}
          className="hover-bounce flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-[#a78bfa] via-purple-500 to-[#f472b6] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-fuchsia-500/35 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none sm:px-6 sm:py-3"
        >
          <span>Send</span>
          <span className="text-base" aria-hidden="true">
            ✨
          </span>
        </button>
      </form>
    </footer>
  );
}
