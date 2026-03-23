import { useEffect, useRef, useState } from "react";
import {
  Code2,
  Zap,
  Users,
  Award,
  GraduationCap,
  Calendar,
  MapPin,
} from "lucide-react";
import Lakshya_PFP from "../../../public/lakshya-pfp.jpg";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: "1+ Years",
      description: "Full-Stack Development Experience",
    },
    {
      icon: Zap,
      title: "20% Faster",
      description: "Optimized Performance using TanStack",
    },
    {
      icon: Users,
      title: "100+ Users",
      description: "Real-world Application Usage",
    },
    {
      icon: Award,
      title: "10+ Projects",
      description: "Delivered Production-ready Solutions",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-beige-50 dark:bg-slate-950 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-24">
            <h2 className="font-display text-6xl md:text-7xl font-semibold mb-6 text-beige-900 dark:text-beige-100 tracking-tightest">
              About Me
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-lavender-400 to-transparent mx-auto"></div>
          </div>

          {/* Main content with professional photo */}
          <div className="grid lg:grid-cols-5 gap-16 items-start mb-24">
            {/* Professional Photo */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-lavender-400 via-softpink-400 to-softgold-400 dark:from-lavender-600 dark:via-softpink-600 dark:to-softgold-600 rounded-3xl opacity-75 group-hover:opacity-100 blur-xl transition-all duration-700"></div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-lavender-300 via-softpink-300 to-softgold-300 dark:from-lavender-700 dark:via-softpink-700 dark:to-softgold-700 rounded-3xl"></div>
                  <img
                    src={Lakshya_PFP}
                    alt="Lakshya Pandey"
                    className="relative rounded-3xl w-full aspect-square object-cover shadow-elegant-lg border-4 border-white/50 dark:border-white/10"
                  />
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-6 text-beige-700 dark:text-beige-300">
                <p className="text-xl leading-relaxed font-light">
                  From crafting clean, responsive interfaces to designing
                  efficient backend systems and APIs, I focus on writing code
                  that's simple, maintainable, and built to last.
                </p>
                <p className="text-xl leading-relaxed font-light">
                  I'm a Full-Stack Developer who enjoys turning ideas into fast,
                  scalable web applications using React, Node.js, and .NET. I
                  like building things that not only work well but also feel
                  great to use.
                </p>
                <p className="text-xl leading-relaxed font-light">
                  Currenlty looking for new opportunities where I can grow,
                  contribute, and be part of building meaningful products.
                </p>
              </div>

              <div className="pt-6 border-t border-beige-200/50 dark:border-white/10">
                <h3 className="font-display text-4xl font-semibold text-beige-900 dark:text-beige-100 mb-6 tracking-tight flex items-center gap-4">
                  <GraduationCap className="w-8 h-8 text-lavender-600 dark:text-lavender-400" />
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-medium text-beige-800 dark:text-beige-200 mb-2">
                      Bachelor of Technology (B.Tech) in Computer Science
                    </h4>
                    <p className="text-lg text-beige-600 dark:text-beige-400 mb-3 font-light">
                      Haldia Institute of Technology, Haldia (MAKAUT University)
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2 text-lavender-600 dark:text-lavender-400">
                      <Calendar className="w-4 h-4" />
                      <span className="font-light">Sep 2021 - Jul 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-softgold-600 dark:text-softgold-400">
                      <Award className="w-4 h-4" />
                      <span className="font-light">CGPA: 8.69/10</span>
                    </div>
                    <div className="flex items-center gap-2 text-softpink-600 dark:text-softpink-400">
                      <MapPin className="w-4 h-4" />
                      <span className="font-light">Uttar Pradesh, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-white/70 dark:bg-white/10 rounded-2xl backdrop-blur-xl border border-beige-200/60 dark:border-white/10 hover:border-lavender-300 dark:hover:border-lavender-700/30 transition-all duration-500 hover:shadow-elegant-lg hover:scale-105"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <item.icon className="w-11 h-11 text-lavender-600 dark:text-lavender-400 mb-5 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-display text-3xl font-semibold text-beige-900 dark:text-beige-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-beige-600 dark:text-beige-400 font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
