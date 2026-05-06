import React, { useCallback } from 'react';
// Hero variants parked for reference — see sections/Hero.tsx and sections/HeroEditorial.tsx
// (both file contents commented out; uncomment to re-enable for comparison).
import { HeroKinetic } from '@/sections/HeroKinetic';
import { TrustStrip } from '@/sections/TrustStrip';
import { About } from '@/sections/About';
import { FeaturedServices } from '@/sections/FeaturedServices';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { Testimonials } from '@/sections/Testimonials';
import { CTABanner } from '@/sections/CTABanner';
import { Contact } from '@/sections/Contact';

export const HomePage: React.FC = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <HeroKinetic onBook={() => scrollToSection('contact')} />
      <TrustStrip />
      <About />
      <FeaturedServices />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner onBook={() => scrollToSection('contact')} />
      <Contact onNavigate={scrollToSection} />
    </>
  );
};

HomePage.displayName = 'HomePage';
