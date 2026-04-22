import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../assets/images/main-bg.png';

gsap.registerPlugin(ScrollTrigger);



export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF5]">
      {/* 8. Hero — World Map SVG Flight Paths */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <svg className="w-full h-full max-w-7xl" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Simplified World Map Paths */}
          <path d="M150,150 Q250,100 350,150 T550,150" stroke="rgba(67,105,0,0.06)" strokeWidth="2" fill="none" />
          <path d="M200,300 Q400,250 600,300 T800,300" stroke="rgba(67,105,0,0.06)" strokeWidth="2" fill="none" />
          <path d="M100,200 Q300,150 500,200 T900,200" stroke="rgba(67,105,0,0.06)" strokeWidth="2" fill="none" />
          
          {/* Animated Flight Paths */}
          <path className="flight-path" d="M200,250 Q450,100 700,250" stroke="#436900" strokeWidth="1" strokeDasharray="8 6" opacity="0.3" />
          <path className="flight-path" d="M300,350 Q500,200 800,300" stroke="#436900" strokeWidth="1" strokeDasharray="8 6" opacity="0.3" />
          <path className="flight-path" d="M150,150 Q400,50 650,200" stroke="#436900" strokeWidth="1" strokeDasharray="8 6" opacity="0.3" />

          {/* Plane Icons traveling along paths */}
          <circle r="3" fill="#9CE625">
            <animateMotion dur="6s" repeatCount="indefinite" path="M200,250 Q450,100 700,250" />
          </circle>
          <circle r="3" fill="#9CE625">
            <animateMotion dur="8s" repeatCount="indefinite" path="M300,350 Q500,200 800,300" />
          </circle>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10 py-32">
        <div className="reveal inline-block px-5 py-2 bg-[#436900]/5 rounded-full mb-8">
          <span className="text-[#436900] font-medium tracking-[0.1em] uppercase text-[10px]">Your Luxury Gateway</span>
        </div>

        <h1 className="reveal text-6xl md:text-8xl lg:text-9xl font-medium text-[#14140F] mb-10 leading-[0.85]">
          Beyond
          <br /><span className="text-[#436900]">Boundaries,</span>
          <br />Within Dreams
        </h1>

        <p className="reveal reveal-delay-1 text-lg md:text-xl text-[#14140F]/60 max-w-2xl mx-auto mb-16 font-normal leading-relaxed">
          Crafting soulful journeys since 2009. We don't just book trips — we create the stories you'll tell for a lifetime.
        </p>

        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/contact" className="btn-primary">
            Begin Your Story
            <span className="material-symbols-outlined text-xl">flight_takeoff</span>
          </Link>

          <Link
            to="/services"
            className="px-8 py-4 rounded-full border border-[#14140F]/10 text-[#14140F] text-sm font-medium tracking-wider uppercase hover:bg-[#F4F4EF] transition-all duration-300"
          >
            Explore Destinations
          </Link>
        </div>

        {/* Route tags */}
        <div className="reveal reveal-delay-3 mt-20 flex flex-wrap justify-center gap-4 opacity-40">
          {['DXB', 'LHR', 'SIN', 'SYD', 'JFK'].map(dest => (
            <span key={dest} className="text-[10px] font-medium tracking-[0.2em] text-[#14140F] px-4 py-2 border border-[#14140F]/10 rounded-full">
              {dest}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#14140F] opacity-20">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#14140F] to-transparent animate-pulse" />
      </div>
    </header>
  );
}

