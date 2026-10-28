import { useState } from "react";

const CSS = `
.pgn { --pgn-ink:#2f2f45; --pgn-accent:#5f5cf2; --pgn-hover:#eeeefc; display:flex; align-items:center; gap:6px; font-family:inherit; }
.pgn button { width:36px; height:36px; border:0; border-radius:6px; background:none; color:var(--pgn-ink); font:inherit; font-size:14px; cursor:pointer; }
.pgn button:hover:not(:disabled) { background:var(--pgn-hover); }
.pgn button:disabled { opacity:.35; cursor:default; }
.pgn button[aria-current="page"] { background:var(--pgn-accent); color:#fff; box-shadow:0 6px 14px rgba(95,92,242,.35); }
.pgn button:focus-visible { outline:2px solid var(--pgn-accent); outline-offset:2px; }
`;

export default function Pagination({
  total = 4,
  page,
  defaultPage = 1,
  onChange,
  className = "",
  align = "center",
}) {
  const [inner, setInner] = useState(defaultPage);
  const current = page ?? inner;

  const go = (p) => {
    if (p < 1 || p > total || p === current) return;
    setInner(p);
    onChange?.(p);
  };
  const alignment = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <nav
      className={`pgn mt-12 w-full min-w-0 ${
        alignment[align] || alignment.center
      } ${className}`}
      aria-label="Pagination"
    >
      <style>{CSS}</style>
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => go(p)}
          aria-current={p === current ? "page" : undefined}
          aria-label={`Page ${p}`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => go(current + 1)}
        disabled={current === total}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}
