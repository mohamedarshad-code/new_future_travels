import { useRef, useEffect, useState, useCallback } from 'react';

/* Inject animation keyframes once */
if (typeof document !== 'undefined' && !document.getElementById('postcard-style')) {
  const s = document.createElement('style');
  s.id = 'postcard-style';
  s.textContent = `
    @keyframes postcardIn {
      from { opacity: 0; transform: var(--pc-from); }
      to   { opacity: 1; transform: translateX(0) rotate(0deg); }
    }
    .postcard-card { opacity: 0; }
    .postcard-card.visible {
      animation: postcardIn 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
    }
    @keyframes postmarkSpin {
      from { transform: scale(0) rotate(-180deg); opacity: 0; }
      to   { transform: scale(1) rotate(0deg); opacity: 1; }
    }
  `;
  document.head.appendChild(s);
}

const POSTCARDS = [
  {
    name: 'Rahul Krishnan',
    title: 'Business Enthusiast',
    from: 'Coimbatore, India',
    to: 'Zurich, Switzerland', 
    stamp: { country: 'CH', color: '#D32F2F', year: '\'24' },
    postmark: 'ZÜRICH',
    ink: '#1A237E',
    text: "The precision with which New Future Travels handles intricate visa documentation is nothing short of legendary. My Switzerland dream was realized in just 10 days — without a single hurdle. They don't just provide a service; they provide peace of mind.",
    stars: 5,
    tint: '#f0e6ff',
  },
  {
    name: 'Priya Sundar',
    title: 'CEO, TechFlow Solutions',
    from: 'Chennai, India',
    to: 'Dubai, UAE',
    stamp: { country: 'AE', color: '#006600', year: '\'23' },
    postmark: 'DUBAI',
    ink: '#2c1654',
    text: "Managing a corporate retreat for 50+ employees is a logistical nightmare. Mohamed Sirajdheen's team executed it with flawless elegance — from the primary flight to the smallest land detail in Dubai, everything was perfect.",
    stars: 5,
    tint: '#fff3e0',
  },
  {
    name: 'Adithya V.',
    title: 'Global Wayfarer & Blogger',
    from: 'Bangalore, India',
    to: 'Ubud, Bali',
    stamp: { country: 'ID', color: '#C62828', year: '\'24' },
    postmark: 'DENPASAR',
    ink: '#1A3A26',
    text: "I've traveled the world, but the 'hidden gems' itinerary New Future Travels created for my Bali expedition was breathtaking. They have an eye for detail and a heart for local experiences you simply won't find anywhere else.",
    stars: 5,
    tint: '#e8f5e9',
  },
];

function PostmarkSVG({ text, color }) {
  return (
    <svg viewBox="0 0 90 90" className="w-full h-full" aria-hidden="true">
      <circle cx="45" cy="45" r="40" fill="none" stroke={color} strokeWidth="2.5"/>
      <circle cx="45" cy="45" r="33" fill="none" stroke={color} strokeWidth="1"/>
      <line x1="20" y1="45" x2="70" y2="45" stroke={color} strokeWidth="1.5"/>
      <text x="45" y="33" textAnchor="middle" fill={color} fontSize="8" fontWeight="700" fontFamily="monospace" letterSpacing="2">POST</text>
      <text x="45" y="58" textAnchor="middle" fill={color} fontSize="9" fontWeight="900" fontFamily="monospace" letterSpacing="1">{text.slice(0,8)}</text>
    </svg>
  );
}

function StarRating({ count, show }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-sm star ${show && i < count ? 'filled' : ''}`}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          star
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ card, visible }) {
  return (
    <div className={`testimonial-card mx-auto max-w-2xl bg-white rounded-[3rem] p-10 lg:p-14 shadow-ambient ${visible ? 'visible' : ''}`}>
      <div className="flex justify-between items-start mb-10">
        <div className="flex gap-4 items-center">
          <div className="w-14 h-14 rounded-full bg-[#436900]/5 flex items-center justify-center font-medium text-[#436900]">
            {card.name[0]}
          </div>
          <div>
            <h4 className="text-lg font-medium text-[#14140F]">{card.name}</h4>
            <p className="text-[10px] tracking-widest uppercase text-[#14140F]/40">{card.title}</p>
          </div>
        </div>
        <StarRating count={card.stars} show={visible} />
      </div>

      <p className="text-xl text-[#14140F]/70 leading-relaxed mb-12 italic">
        "{card.text}"
      </p>

      <div className="flex items-center justify-between pt-8 border-t border-[#F4F4EF]">
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#14140F]/30 uppercase tracking-widest">{card.from.split(',')[0]}</span>
          <span className="material-symbols-outlined text-[#436900] text-sm">east</span>
          <span className="text-xs font-mono text-[#436900] uppercase tracking-widest font-medium">{card.to.split(',')[0]}</span>
        </div>
        
        {/* Route Strip Barcode */}
        <div className="barcode-wrap w-24">
          <div className="flex gap-[1px] h-6 items-end">
            {Array.from({ length: 20 }).map((_, j) => (
              <div
                key={j}
                className="flex-1 bg-[#14140F]/10 rounded-sm"
                style={{ height: `${20 + (Math.sin(j) * 10 + 10)}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % POSTCARDS.length);
        setVisible(true);
      }, 600);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const card = POSTCARDS[activeIdx];

  return (
    <section className="py-24 lg:py-40 bg-[#FAFAF5] overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <p className="text-[#436900] font-medium text-[10px] tracking-[0.2em] uppercase mb-6">Trusted Voices</p>
          <h2 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[0.9] text-[#14140F]">
            Stories of<br /><span className="text-[#436900]">Adventure</span>
          </h2>
        </div>

        <div className="min-h-[400px] flex items-center justify-center">
          <TestimonialCard card={card} visible={visible} key={activeIdx} />
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-3 mt-16 reveal reveal-delay-2">
          {POSTCARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActiveIdx(i); setVisible(true); }}
              className={`nav-dot ${activeIdx === i ? 'active' : ''}`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

