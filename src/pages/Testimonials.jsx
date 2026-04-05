import TestimonialsSection from '../components/TestimonialsSection';
import { PartnerSpotlight } from '../components/SupplementarySections';
import CTABanner from '../components/CTABanner';
import useGsapAnimations from '../hooks/useGsapAnimations';
import { useRef } from 'react';

export default function Testimonials() {
  const mainRef = useRef();
  useGsapAnimations(mainRef);

  return (
    <div ref={mainRef}>
      <div className="pt-24 pb-12 text-center bg-surface gsap-reveal">
        <h1 className="text-5xl font-black">Client Stories</h1>
      </div>
      <div className="gsap-reveal"><TestimonialsSection /></div>
      <div className="gsap-reveal"><PartnerSpotlight /></div>
      <div className="gsap-reveal"><CTABanner /></div>
    </div>
  );
}
