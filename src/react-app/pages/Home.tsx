import Hero from '@/react-app/components/Hero';
import About from '@/react-app/components/About';
import Skills from '@/react-app/components/Skills';
import Projects from '@/react-app/components/Projects';
import Resume from '@/react-app/components/Resume';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';
import ThemeToggle from '@/react-app/components/ThemeToggle';
import StickyResumeButton from '@/react-app/components/StickyResumeButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-700">
      <ThemeToggle />
      <StickyResumeButton />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
