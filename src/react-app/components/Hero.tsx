import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { downloadResume } from "../../utils/downloadResume";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-700">
      {/* Project visuals background with parallax */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white dark:from-slate-950 dark:via-transparent dark:to-slate-950 z-10"></div>
        <div className="grid grid-cols-3 gap-4 p-8 blur-sm">
          <div className="space-y-4">
            <div className="h-48 bg-gradient-to-br from-lavender-200 to-softpink-200 dark:from-lavender-900/30 dark:to-softpink-900/30 rounded-2xl"></div>
            <div className="h-64 bg-gradient-to-br from-softgold-200 to-lavender-200 dark:from-softgold-900/30 dark:to-lavender-900/30 rounded-2xl"></div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="h-56 bg-gradient-to-br from-softpink-200 to-softgold-200 dark:from-softpink-900/30 dark:to-softgold-900/30 rounded-2xl"></div>
            <div className="h-52 bg-gradient-to-br from-lavender-200 to-softpink-200 dark:from-lavender-900/30 dark:to-softpink-900/30 rounded-2xl"></div>
          </div>
          <div className="space-y-4">
            <div className="h-60 bg-gradient-to-br from-softgold-200 to-lavender-200 dark:from-softgold-900/30 dark:to-lavender-900/30 rounded-2xl"></div>
            <div className="h-48 bg-gradient-to-br from-softpink-200 to-lavender-200 dark:from-softpink-900/30 dark:to-lavender-900/30 rounded-2xl"></div>
          </div>
        </div>
      </div>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 mesh-bg"></div>

      {/* Floating abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-lavender-300/20 via-softpink-300/20 to-transparent dark:from-lavender-600/10 dark:via-softpink-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-softgold-300/20 via-lavender-300/20 to-transparent dark:from-softgold-600/10 dark:via-lavender-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div
        className={`relative z-10 max-w-6xl mx-auto px-8 py-32 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mb-10">
          <span className="inline-block px-6 py-3 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-beige-200/60 dark:border-white/10 rounded-full text-lavender-700 dark:text-lavender-300 text-sm font-medium tracking-wide shadow-elegant">
            Available for Opportunities
          </span>
        </div>

        <h1 className="font-display text-8xl md:text-9xl lg:text-[10rem] font-semibold mb-10 bg-gradient-to-br from-lavender-700 via-softpink-600 to-softgold-600 dark:from-lavender-200 dark:via-softpink-200 dark:to-softgold-300 bg-clip-text text-transparent leading-extra-tight tracking-tightest drop-shadow-sm">
          Lakshya Pandey
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-12 text-beige-800 dark:text-beige-200 tracking-wide">
          Full-Stack Web & Unity Developer
        </h2>

        <p className="text-lg md:text-xl text-beige-700 dark:text-beige-300 max-w-3xl mx-auto mb-20 leading-relaxed font-light">
          Crafting scalable web applications with React, .NET, and Node.js.
          Passionate about creating seamless experiences and efficient systems.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 mb-20 sm:mb-24 w-full max-w-md sm:max-w-none mx-auto">
          {/* Get In Touch */}
          <button
            onClick={() => scrollToSection("contact")}
            className="group w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-base bg-gradient-to-r from-lavender-600 to-softpink-600 dark:from-lavender-500 dark:to-softpink-500 text-white rounded-xl sm:rounded-2xl font-medium hover:shadow-elegant-lg transition-all duration-300 sm:duration-500 hover:scale-[1.02] flex items-center justify-center"
          >
            Get In Touch
            <Mail className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Resume */}
          <button
            onClick={downloadResume}
            className="group w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-base bg-white/70 dark:bg-white/10 text-beige-800 dark:text-beige-200 rounded-xl sm:rounded-2xl font-medium backdrop-blur-xl border border-beige-200/60 dark:border-white/10 hover:bg-white dark:hover:bg-white/15 hover:shadow-elegant transition-all duration-300 sm:duration-500 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-0.5 transition-transform" />
            Resume
          </button>

          {/* View Projects */}
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-base bg-white/70 dark:bg-white/10 text-beige-800 dark:text-beige-200 rounded-xl sm:rounded-2xl font-medium backdrop-blur-xl border border-beige-200/60 dark:border-white/10 hover:bg-white dark:hover:bg-white/15 hover:shadow-elegant transition-all duration-300 sm:duration-500"
          >
            View Projects
          </button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Lakshya84"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-white/70 dark:bg-white/10 rounded-2xl backdrop-blur-xl border border-beige-200/60 dark:border-white/10 hover:bg-white dark:hover:bg-white/15 hover:scale-110 transition-all duration-300 group shadow-elegant"
          >
            <Github className="w-6 h-6 text-beige-700 dark:text-beige-300 group-hover:text-lavender-600 dark:group-hover:text-lavender-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/lakshyapandey"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-white/70 dark:bg-white/10 rounded-2xl backdrop-blur-xl border border-beige-200/60 dark:border-white/10 hover:bg-white dark:hover:bg-white/15 hover:scale-110 transition-all duration-300 group shadow-elegant"
          >
            <Linkedin className="w-6 h-6 text-beige-700 dark:text-beige-300 group-hover:text-lavender-600 dark:group-hover:text-lavender-400 transition-colors" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hover:opacity-100 transition-opacity"
        >
          <ArrowDown className="w-7 h-7 text-beige-600 dark:text-beige-400" />
        </button>
      </div>
    </section>
  );
}
