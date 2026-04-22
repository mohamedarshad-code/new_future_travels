import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { end: 15,   suffix: '+', label: 'Years of Excellence', icon: 'history_edu' },
  { end: 60,   suffix: '+', label: 'Countries Served',    icon: 'public' },
  { end: 5000, suffix: '+', label: 'Happy Travelers',     icon: 'groups' },
  { end: 99,   suffix: '%', label: 'Satisfaction Rate',   icon: 'verified' },
];

const MILESTONES = [
  { year: '2009', title: 'The First Flight', desc: 'Inaugurated our first office in Coimbatore.' },
  { year: '2015', title: 'Global Expansion', desc: 'Established partnerships with 100+ airlines.' },
  { year: '2024', title: 'Beyond Boundaries', desc: 'Crafting soulful luxury journeys worldwide.' },
];

/* ─── Count-up stat card ─── */
function OdometerStat({ stat, index }) {
  return (
    <div className={`reveal reveal-delay-${(index % 3) + 1} text-center p-8 rounded-[2rem] bg-white shadow-ambient hover:-translate-y-1 transition-all duration-300`}>
      <span className="material-symbols-outlined text-3xl text-[#436900] mb-4 block">{stat.icon}</span>
      <div className="text-4xl lg:text-5xl font-medium text-[#14140F] leading-none flex justify-center items-center">
        <span data-countup data-target={stat.end}>0</span>
        <span>{stat.suffix}</span>
      </div>
      <p className="text-[#14140F]/40 text-[10px] font-medium tracking-[0.12em] uppercase mt-4 leading-tight">{stat.label}</p>
    </div>
  );
}

/* ─── About Section ─── */
export default function AboutSection() {
  return (
    <section
      className="py-24 lg:py-40 bg-[#F4F4EF] overflow-hidden"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="reveal inline-block px-5 py-2 bg-[#436900]/5 rounded-full mb-8">
          <span className="text-[#436900] font-medium tracking-[0.1em] uppercase text-[10px]">Established 2009</span>
        </div>

        <h2 className="reveal text-5xl lg:text-7xl font-medium tracking-tight mb-10 leading-[0.9] text-[#14140F]">
          Legacy of
          <br /><span className="text-[#436900]">Exceptional</span>
          <br />Travel
        </h2>

        <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
          <div className="reveal">
            <p className="text-xl text-[#14140F]/70 leading-relaxed font-normal mb-12">
              Founded by A. Mohamed Sirajdheen with a single promise — to treat every traveler's dream as our own.
              Based in Coimbatore, we've spent over a decade turning that promise into a global legacy.
            </p>
            <blockquote className="text-xl text-[#14140F] leading-relaxed italic border-l-4 border-[#436900] pl-8">
              "Travel is the only thing you buy that makes you richer. At New Future Travels, we ensure that
              wealth is measured in memories, not just destination markers."
            </blockquote>
          </div>

          {/* Timeline */}
          <div className="space-y-12 relative pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[#436900]/10" />
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`reveal reveal-delay-${i + 1} relative`}>
                <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#436900] timeline-dot" />
                <p className="text-[#436900] font-medium text-xs tracking-widest uppercase mb-1">{m.year}</p>
                <h4 className="text-lg font-medium text-[#14140F] mb-2">{m.title}</h4>
                <p className="text-sm text-[#14140F]/60 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <OdometerStat key={i} index={i} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}


