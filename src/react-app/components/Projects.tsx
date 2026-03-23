import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  created_at: string;
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/Lakshya84/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  const languageColors: { [key: string]: string } = {
    JavaScript: 'from-yellow-400 to-yellow-500',
    TypeScript: 'from-blue-400 to-blue-500',
    Python: 'from-green-400 to-green-500',
    'C++': 'from-pink-400 to-pink-500',
    'C#': 'from-purple-400 to-purple-500',
    Java: 'from-red-400 to-red-500',
    HTML: 'from-orange-400 to-orange-500',
    CSS: 'from-cyan-400 to-cyan-500',
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 bg-beige-50 dark:bg-slate-950 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-24">
            <h2 className="font-display text-6xl md:text-7xl font-semibold mb-6 text-beige-900 dark:text-beige-100 tracking-tightest">
              Featured Projects
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-lavender-400 to-transparent mx-auto"></div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-lavender-400 border-t-transparent"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map((repo, index) => (
                <div
                  key={repo.id}
                  className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-beige-200/60 dark:border-white/10 hover:border-lavender-300 dark:hover:border-lavender-700/30 transition-all duration-500 hover:shadow-elegant-lg hover:scale-[1.02]"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lavender-100/0 via-softpink-100/0 to-softgold-100/0 dark:from-lavender-600/0 dark:via-softpink-600/0 dark:to-softgold-600/0 group-hover:from-lavender-100/20 group-hover:via-softpink-100/20 group-hover:to-softgold-100/20 dark:group-hover:from-lavender-600/10 dark:group-hover:via-softpink-600/10 dark:group-hover:to-softgold-600/10 transition-all duration-500"></div>

                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${languageColors[repo.language || ''] || 'from-gray-400 to-gray-500'} group-hover:scale-110 transition-transform duration-500`}>
                        <Github className="w-6 h-6 text-white" />
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-beige-100 dark:bg-white/5 rounded-lg hover:bg-beige-200 dark:hover:bg-white/10 transition-colors border border-beige-200/50 dark:border-white/10"
                      >
                        <ExternalLink className="w-4 h-4 text-beige-700 dark:text-beige-300" />
                      </a>
                    </div>

                    <h3 className="font-display text-2xl font-semibold text-beige-900 dark:text-beige-100 mb-4 group-hover:text-lavender-700 dark:group-hover:text-lavender-300 transition-colors tracking-tight">
                      {repo.name}
                    </h3>

                    <p className="text-beige-600 dark:text-beige-400 text-sm font-light mb-6 line-clamp-2 min-h-[40px] leading-relaxed">
                      {repo.description || 'No description available'}
                    </p>

                    <div className="flex items-center justify-between text-xs">
                      {repo.language && (
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-beige-100 dark:bg-white/5 rounded-lg border border-beige-200/50 dark:border-white/10">
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${languageColors[repo.language] || 'from-gray-400 to-gray-500'}`}></span>
                          <span className="font-light text-beige-700 dark:text-beige-300">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-4 text-beige-500 dark:text-beige-500">
                        {repo.stargazers_count > 0 && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            <span className="font-light">{repo.stargazers_count}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span className="font-light">{new Date(repo.created_at).getFullYear()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <a
              href="https://github.com/Lakshya84"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-white/70 dark:bg-white/10 text-beige-800 dark:text-beige-200 rounded-2xl font-medium backdrop-blur-xl border border-beige-200/60 dark:border-white/10 hover:bg-white dark:hover:bg-white/15 hover:shadow-elegant transition-all duration-500 hover:scale-105"
            >
              View All Projects
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
