import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/react-app/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 z-50 p-4 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-full shadow-elegant border border-beige-200/50 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:scale-110 transition-all duration-500 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 w-6 h-6 text-lavender-600 transition-all duration-700 ${
            theme === "light" ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 text-lavender-400 transition-all duration-700 ${
            theme === "dark" ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
