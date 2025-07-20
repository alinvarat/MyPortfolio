import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HistorySection from '@/components/HistorySection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <div id="home" className="scroll-section">
        <HeroSection />
      </div>
      <div id="about" className="scroll-section">
        <AboutSection />
      </div>
      <div id="history" className="scroll-section">
        <HistorySection />
      </div>
      <div id="skills" className="scroll-section">
        <SkillsSection />
      </div>
      <div id="work" className="scroll-section">
        <ProjectsSection />
      </div>
      <div id="contact" className="scroll-section">
        <ContactSection />
      </div>
    </>
  );
}
