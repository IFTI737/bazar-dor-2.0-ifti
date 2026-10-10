"use client";

import { useSyncExternalStore } from "react";

const DARK = "bazardor-dark";
const LIGHT = "bazardor";

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
};

const ThemeToggle = () => {
  const isDark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme === DARK,
    () => false,
  );

  const toggle = () => {
    const next = isDark ? LIGHT : DARK;
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", isDark ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "লাইট মোড চালু করুন" : "ডার্ক মোড চালু করুন"}
      title={isDark ? "লাইট মোড" : "ডার্ক মোড"}
      className="btn btn-ghost btn-circle btn-sm text-lg"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
