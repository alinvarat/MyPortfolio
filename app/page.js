import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HistorySection from '@/components/HistorySection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import AnimatedSection from '@/components/AnimatedWrapper';

export default function Home() {
  return (
    <>
      <div id="home" className="scroll-section">
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
      </div>
    </>
  );
}
