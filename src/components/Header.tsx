import { useEffect, useState } from "react";
import { Bars } from "./icons";
import { PLATFORMS } from "../data/catalog";

function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {}
    return "dark";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))] as const;
}

export default function Header() {
  const [theme, toggle] = useTheme();
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-header bg-surface">
      <div className="mx-auto flex h-full max-w-page items-center gap-2x px-2x">
        <a href="#top" className="flex items-center gap-1x text-h3 tracking-[-0.02em] text-primary">
          <Bars />
          Avdrav
        </a>
        <nav className="hidden items-center gap-2x sm:flex" aria-label="Site">
          <a className="text-h4 text-secondary hover:text-primary" href="#music">Music</a>
          <a className="text-h4 text-secondary hover:text-primary" href="#singles">Singles</a>
          <a className="text-h4 text-secondary hover:text-primary" href="#about">About</a>
        </nav>
        <div className="ml-auto flex items-center gap-1x">
          <button className="ctl ctl-tertiary" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
          <a className="ctl ctl-primary ctl-pill" href={PLATFORMS.youtube} target="_blank" rel="noopener">
            <span>Subscribe</span>
          </a>
        </div>
      </div>
    </header>
  );
}
