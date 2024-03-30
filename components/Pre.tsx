import { useState, useRef } from "react";

interface PreProps {
  children: JSX.Element;
}

export const Pre = ({ children }: PreProps) => {
  const textInput = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState(false);

  const [copied, setCopied] = useState(false);

  const onEnter = () => {
    setHovered(true);
  };

  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };

  const onCopy = () => {
    setCopied(true);

    navigator.clipboard.writeText(textInput?.current?.textContent ?? "");

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      ref={textInput}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      className="relative text-lg"
    >
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          className="absolute right-2 top-2 h-7 w-7 p-1"
          onClick={onCopy}
          title="Copy code"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={copied ? "text-green-400" : "text-gray-300"}
          >
            {copied ? (
              <polyline points="20 6 9 17 4 12"></polyline>
            ) : (
              <>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </>
            )}
          </svg>
        </button>
      )}

      <pre className="language-">{children}</pre>
    </div>
  );
};
