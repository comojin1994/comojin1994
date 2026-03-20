import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AwardsSection from '@/components/sections/AwardsSection';
import CareerSection from '@/components/sections/CareerSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProjectsSection />
      <AwardsSection />
      <CareerSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
