import { useEffect, useRef, useState } from "react";
import { FileText, Award, Briefcase } from "lucide-react";

export default function Resume() {
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

  const experience = [
    {
      company: "Capsitech IT Services",
      role: "Assistant System Engineer",
      period: "Jul 2025 - Dec 2025",
      description:
        "Leading development of compliance management platforms using React, TypeScript, and .NET Core. Architecting scalable solutions that serve 100+ users with enhanced performance and reliability.",
    },
    {
      company: "Capsitech IT Services",
      role: "Full Stack Developer Trainee",
      period: "Jan 2025 - Jun 2025",
      description:
        "Developed intensive web design, Java programming, and DBMS projects. Contributed to building data visualization tools that improved operational efficiency by 20%.",
    },
    {
      company: "PwC-US Launchpad Programme",
      role: "Apprenticeship Trainee",
      period: "Feb 2024 - Jun 2024",
      description:
        "Worked on real-world business scenarios including data analysis and dashboard creation, applying problem-solving skills to derive insights and support decision-making.",
    },
  ];

  const honors = [
    {
      title: "TCS CodeVita Season 12",
      achievement: "Ranked 7,533 out of 100,000+ participants",
      year: "2025",
    },
    {
      title: "PwC-US Launchpad Programme",
      achievement: "Top 100 among 5,000+ participants",
      year: "2023",
    },
    {
      title: "Inter-College Robotics Competition",
      achievement: "1st Place as Team Lead",
      year: "2023",
    },
    {
      title: "Web Development Workshop",
      achievement: "Runner-Up in Frontend Development",
      year: "2022",
    },
  ];

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-32 bg-white dark:bg-slate-950 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-24">
            <h2 className="font-display text-6xl md:text-7xl font-semibold mb-6 text-beige-900 dark:text-beige-100 tracking-tightest">
              Experience & Honors
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-lavender-400 to-transparent mx-auto"></div>
          </div>

          <div className="space-y-20">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <Briefcase className="w-8 h-8 text-lavender-600 dark:text-lavender-400" />
                <h3 className="font-display text-4xl font-semibold text-beige-900 dark:text-beige-100 tracking-tight">
                  Professional Experience
                </h3>
              </div>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className="group p-10 bg-white/70 dark:bg-white/10 rounded-2xl backdrop-blur-xl border border-beige-200/60 dark:border-white/10 hover:border-lavender-300 dark:hover:border-lavender-700/30 transition-all duration-500 shadow-elegant hover:shadow-elegant-lg"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 gap-3">
                      <div>
                        <h4 className="font-display text-2xl font-semibold text-beige-900 dark:text-beige-100 tracking-tight mb-2">
                          {job.role}
                        </h4>
                        <p className="text-lg text-lavender-600 dark:text-lavender-400 font-light">
                          {job.company}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-beige-100 dark:bg-white/5 text-beige-600 dark:text-beige-400 rounded-lg text-sm font-light border border-beige-200/50 dark:border-white/10">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-beige-700 dark:text-beige-300 font-light leading-relaxed text-lg">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Honors & Achievements */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <Award className="w-8 h-8 text-lavender-600 dark:text-lavender-400" />
                <h3 className="font-display text-4xl font-semibold text-beige-900 dark:text-beige-100 tracking-tight">
                  Honors & Achievements
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {honors.map((honor, index) => (
                  <div
                    key={index}
                    className="group p-8 bg-white/70 dark:bg-white/10 rounded-2xl backdrop-blur-xl border border-beige-200/60 dark:border-white/10 hover:border-lavender-300 dark:hover:border-lavender-700/30 transition-all duration-500 flex items-start gap-5 shadow-elegant hover:shadow-elegant-lg"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <FileText className="w-6 h-6 text-lavender-600 dark:text-lavender-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-500" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="font-semibold text-beige-900 dark:text-beige-100 text-lg leading-tight">
                          {honor.title}
                        </h4>
                        <span className="text-xs text-softgold-600 dark:text-softgold-400 font-light bg-softgold-100 dark:bg-softgold-900/20 px-3 py-1 rounded-full">
                          {honor.year}
                        </span>
                      </div>
                      <p className="text-beige-700 dark:text-beige-300 text-sm font-light leading-relaxed">
                        {honor.achievement}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
