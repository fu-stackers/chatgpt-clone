import { useState } from "react";
import { ArrowUp } from "lucide-react";

type ChatInputProps = {
  onSend: (text: string) => void;
};

export default function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState("");

  function submit() {
    const clean = text.trim();
    if (!clean) return;
    onSend(clean);
    setText("");
  }

  return (
    <div className="flex items-center gap-3 rounded-3xl border border-border-light bg-box-light px-5 py-3  shadow-sm dark:border-dark-border-bg dark:bg-dark-bg-box">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
        placeholder="Ask nuzz ai"
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-text-light/60 dark:placeholder:text-text-dark/60"
      />
      <button
        onClick={submit}
        disabled={!text.trim()}
        aria-label="Send message"
        className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white transition duration-200 hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}