import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaUnity,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiDotnet,
  SiCplusplus,
  SiPython,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Flat skills with icons
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <DiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Unity", icon: <FaUnity /> },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-28 bg-white dark:bg-slate-950 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-6xl md:text-7xl font-semibold mb-6 text-beige-900 dark:text-beige-100">
            Skills and Expertise
          </h2>
          <p className="text-beige-500 dark:text-beige-400 max-w-2xl mx-auto text-sm">
            Technologies and tools I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-6 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-beige-200/50 dark:border-white/10 shadow-elegant hover:shadow-elegant-lg hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-lavender-600 dark:text-lavender-400 group-hover:text-softpink-500 transition-colors duration-300">
                {skill.icon}
              </div>

              {/* Name */}
              <p className="text-sm text-beige-800 dark:text-beige-200 font-light text-center">
                {skill.name}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-lavender-500/10 via-softpink-500/10 to-softgold-500/10 rounded-xl blur-md transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
