import AboutSection from '../components/AboutSection';
import { CompanyValues } from '../components/AboutPageSections';
import PassportTimeline from '../components/PassportTimeline';
import CTABanner from '../components/CTABanner';
import useGsapAnimations from '../hooks/useGsapAnimations';
import { useRef } from 'react';

export default function About() {
  const mainRef = useRef();
  useGsapAnimations(mainRef);

  return (
    <div ref={mainRef}>
      <div className="pt-24 pb-12 text-center bg-surface gsap-reveal">
        <h1 className="text-5xl font-black">About Us</h1>
      </div>
      <AboutSection />
      <div className="gsap-reveal"><CompanyValues /></div>
      <PassportTimeline />
      <div className="gsap-reveal"><CTABanner /></div>
    </div>
  );
}
