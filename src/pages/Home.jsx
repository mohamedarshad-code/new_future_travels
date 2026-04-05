import Hero from '../components/Hero';
import VerticalJourney from '../components/VerticalJourney';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import CTABanner from '../components/CTABanner';
import useGsapAnimations from '../hooks/useGsapAnimations';
import { useRef } from 'react';

export default function Home() {
  const mainRef = useRef();
  useGsapAnimations(mainRef);

  return (
    <div ref={mainRef}>
      <Hero />
      <VerticalJourney />
      <ServicesSection />
      <AboutSection />
      <div className="gsap-reveal"><TestimonialsSection /></div>
      <div className="gsap-reveal"><ContactSection /></div>
      <div className="gsap-reveal"><CTABanner /></div>
    </div>
  );
}
