import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // Uses Lucide icons

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white transition-all duration-300 shadow-lg hover:scale-105"
    >
      {isDark ? <Moon size={20} /> : <Sun size={20} />}
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
};

export default ThemeToggle;
