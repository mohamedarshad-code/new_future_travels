import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../assets/images/main-bg.png';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef();

  useGSAP(() => {
    // Initial Entrance
    gsap.fromTo(".hero-content > *",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power4.out", delay: 0.3 }
    );

    // Enhanced Background Parallax (Deeper Movement)
    gsap.to(".parallax-bg", {
      yPercent: 40,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Content Layering Parallax (Opposite direction for depth)
    gsap.to(".hero-content", {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: heroRef });

  return (
    <header className="relative min-h-[95vh] flex items-center justify-center overflow-hidden" ref={heroRef}>
      <div
        className="absolute inset-0 z-0 parallax-bg origin-top"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '120%' // Extra height for deeper parallax
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-8 text-center relative z-10 py-32 hero-content">
        <h1 className="hero-display font-black text-white mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
          Beyond Boundaries,<br />Within Your Dreams
        </h1>
        <p className="text-xl md:text-3xl text-stone-100 max-w-3xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          Crafting soulful journeys since 2009. We don't just book trips; we create the stories you'll tell for a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="px-12 py-6 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white text-xl font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-all duration-300">
            Begin Your Story
          </button>
          <button className="px-12 py-6 rounded-xl bg-white/10 backdrop-blur-md text-white border border-white/30 text-xl font-bold hover:bg-white/20 transition-all duration-300">
            Explore Destinations
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white opacity-50">
        <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
      </div>
    </header>
  );
}
