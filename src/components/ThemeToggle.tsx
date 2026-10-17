import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type ThemeIconProps = {
  size?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const SunIcon = FiSun as React.ComponentType<ThemeIconProps>;
  const MoonIcon = FiMoon as React.ComponentType<ThemeIconProps>;

  return (
    <button
      type="button"
      onClick={() => setDarkMode((current) => !current)}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-8 w-16 items-center rounded-full border border-black/10 bg-black/5 p-1 transition-colors duration-300 dark:border-white/10 dark:bg-white/10"
    >
      <span
        className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 ${
          darkMode ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <MoonIcon size={14} className="text-[#FF4D00]" aria-hidden="true" />
        ) : (
          <SunIcon size={14} className="text-[#FF4D00]" aria-hidden="true" />
        )}
      </span>

      <span className="flex w-full items-center justify-between px-1 text-black/40 dark:text-white/40">
        <SunIcon size={13} aria-hidden="true" />
        <MoonIcon size={13} aria-hidden="true" />
      </span>
    </button>
  );
}