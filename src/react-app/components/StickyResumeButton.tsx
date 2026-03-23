import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { downloadResume } from "../../utils/downloadResume";

export default function StickyResumeButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 1.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={downloadResume}
      className={`fixed top-8 right-24 z-40 px-6 py-3.5 bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-2xl font-medium border border-beige-200/60 dark:border-white/10 hover:bg-white dark:hover:bg-white/15 hover:shadow-elegant-lg transition-all duration-500 hover:scale-105 flex items-center gap-2.5 text-beige-800 dark:text-beige-200 group ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
      <span className="hidden sm:inline">Resume</span>
    </button>
  );
}
