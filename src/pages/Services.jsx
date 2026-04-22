import ServicesSection from '../components/ServicesSection';
import CTABanner from '../components/CTABanner';
import useGsapAnimations from '../hooks/useGsapAnimations';
import { useRef } from 'react';

export default function Services() {
  const mainRef = useRef();
  useGsapAnimations(mainRef);

  return (
    <div ref={mainRef}>
      <div className="pt-24 pb-12 text-center bg-surface">
        <h1 className="text-5xl font-black">Our Services</h1>
      </div>
      <ServicesSection />
      <div className="gsap-reveal"><CTABanner /></div>
    </div>
  );
}
