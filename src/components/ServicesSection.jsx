import { useRef, useEffect, useState } from 'react';

const SERVICES = [
  {
    icon: 'verified_user',
    title: 'Visa Assistance',
    dest: 'Schengen · UK · USA · Canada',
    region: 'Europe & Americas',
    color: '#8B1A1A',
    tag: 'VZA',
    number: '01',
    desc: 'Navigate global borders with confidence. Our elite documentation experts ensure your visa process is seamless, swift, and stress-free.',
  },
  {
    icon: 'assignment_ind',
    title: 'Passport Services',
    dest: 'Fresh · Renewal · Tatkal',
    region: 'All Passport Offices',
    color: '#1A4A8B',
    tag: 'PPT',
    number: '02',
    desc: 'From fresh applications to urgent renewals, we handle the intricacies of passport processing with precision and speed.',
  },
  {
    icon: 'travel_explore',
    title: 'Curated Tours',
    dest: 'Maldives · Europe · SE Asia',
    region: 'International',
    color: '#1A5C2A',
    tag: 'TRV',
    number: '03',
    desc: 'Experience the world through our eyes. We design bespoke itineraries that go beyond the ordinary.',
  },
  {
    icon: 'description',
    title: 'Attestation',
    dest: 'Educational · Personal · Legal',
    region: 'UAE · Qatar · Saudi',
    color: '#6B4C00',
    tag: 'ATT',
    number: '04',
    desc: 'Secure your future abroad. Legally verified attestation for educational and personal credentials globally.',
  },
  {
    icon: 'groups',
    title: 'Group & Corporate',
    dest: 'MICE · Retreats · Incentives',
    region: 'Worldwide',
    color: '#5B2A8B',
    tag: 'GRP',
    number: '05',
    desc: 'Unite your team through discovery. Complex group logistics for corporate retreats and family milestones.',
  },
  {
    icon: 'diamond',
    title: 'Bespoke Stays',
    dest: 'Private Isle · Boutique Villas',
    region: 'Maldives · Seychelles',
    color: '#8B1A5C',
    tag: 'LUX',
    number: '06',
    desc: "Rest in the lap of luxury. Exclusive access to the world's most prestigious resorts and hidden boutique gems.",
  },
  {
    icon: 'sailing',
    title: 'Elite Cruises',
    dest: 'Mediterranean · Caribbean',
    region: 'Ocean & River',
    color: '#1A5C5C',
    tag: 'CRZ',
    number: '07',
    desc: 'Set sail on a voyage of a lifetime. Curated ocean and river cruises with personalized concierge service.',
  },
  {
    icon: 'flight',
    title: 'Priority Flights',
    dest: 'Business · First Class · Charter',
    region: '150+ Airlines',
    color: '#2A5C1A',
    tag: 'FLT',
    number: '08',
    desc: 'Fly better for less. Our global network secures the best fares with priority seating and 24/7 support.',
  },
];

/* ─── CSS injected once ─────────────────────────────────────────────── */
const STYLE = `
  .cards-track {
    display: flex;
    gap: 32px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    cursor: grab;
    padding-bottom: 80px;
    -webkit-overflow-scrolling: touch;
  }
  .cards-track::-webkit-scrollbar { display: none; }
  .cards-track.active { cursor: grabbing; }
  
  .card-snap {
    scroll-snap-align: start;
    flex-shrink: 0;
  }
  
  .boarding-pass-card {
    background: #FFFFFF;
    border-radius: 2.5rem;
    box-shadow: 0 20px 40px rgba(20, 20, 15, 0.03);
    transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
  }

  .boarding-pass-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(125deg, transparent 40%, rgba(156, 230, 37, 0.08) 50%, transparent 60%);
    background-size: 250% 250%;
    transition: background-position 0.9s ease;
    pointer-events: none;
    z-index: 5;
  }

  .boarding-pass-card:hover {
    transform: translateY(-20px) rotateX(6deg) rotateY(-4deg);
    box-shadow: 0 50px 100px rgba(67, 105, 0, 0.1);
  }

  .boarding-pass-card:hover::after {
    background-position: 100% 100%;
  }

  .scan-line {
    position: absolute;
    top: 0;
    left: -10%;
    width: 3px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, #9CE625, transparent);
    box-shadow: 0 0 20px #9CE625;
    opacity: 0;
    pointer-events: none;
    z-index: 10;
  }

  .boarding-pass-card:hover .scan-line {
    animation: scan 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    opacity: 0.6;
  }

  @keyframes scan {
    0% { left: -10%; }
    100% { left: 110%; }
  }

  .barcode-bar {
    transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1), background 0.4s ease;
  }

  .boarding-pass-card:hover .barcode-bar {
    background: #436900;
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('services-style')) {
  const s = document.createElement('style');
  s.id = 'services-style';
  s.textContent = STYLE;
  document.head.appendChild(s);
}

/* ─── Single Boarding Pass card ───────────────────────────────────────────── */
function BoardingPass({ service, index }) {
  return (
    <div className="card-snap">
      <div className="boarding-pass-card w-[350px] h-[500px] flex flex-col p-10 flex-shrink-0">
        <div className="scan-line" />
      
      <div className="flex justify-between items-start mb-12">
        <div className="w-16 h-16 rounded-2xl bg-[#F4F4EF] flex items-center justify-center">
          <span className="material-symbols-outlined text-[#436900] text-4xl">{service.icon}</span>
        </div>
        <div className="text-right">
          <p className="text-[#14140F]/20 text-[10px] tracking-[0.2em] uppercase mb-1">Class</p>
          <p className="text-2xl font-medium text-[#436900] tracking-tighter">{service.tag}</p>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-[#14140F]/20 text-[10px] tracking-[0.2em] uppercase mb-4">Service</p>
        <h3 className="text-3xl font-medium text-[#14140F] mb-6 leading-[1.1] tracking-tight">{service.title}</h3>
        <p className="text-base text-[#14140F]/50 leading-relaxed mb-6 font-normal">{service.desc}</p>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-end pb-8 border-b border-[#F4F4EF]">
          <div>
            <p className="text-[#14140F]/20 text-[10px] tracking-[0.2em] uppercase mb-1">Region</p>
            <p className="text-[12px] font-medium text-[#14140F] uppercase tracking-wider">{service.region}</p>
          </div>
          <div className="text-right">
            <p className="text-[#14140F]/20 text-[10px] tracking-[0.2em] uppercase mb-1">Gate</p>
            <p className="text-[12px] font-medium text-[#14140F] tracking-widest">{service.number}</p>
          </div>
        </div>

        <div className="barcode-wrap pt-10 pb-2">
          <div className="flex gap-[3px] h-12 items-end">
            {Array.from({ length: 44 }).map((_, j) => (
              <div
                key={j}
                className="barcode-bar flex-1 rounded-full bg-[#14140F]/10"
                style={{
                  height: j % 7 === 0 ? '100%' : j % 3 === 0 ? '70%' : j % 5 === 0 ? '40%' : '85%',
                  transitionDelay: `${j * 8}ms`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

/* ─── Services Section ────────────────────────────────────────────────────── */
export default function ServicesSection() {
  const trackRef = useRef(null);
  const hintRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // --- 1. Mouse Drag Logic ---
    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      track.classList.add('active');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      if (hintRef.current) hintRef.current.style.opacity = '0';
    };

    const onMouseLeave = () => {
      isDown = false;
      track.classList.remove('active');
    };

    const onMouseUp = () => {
      isDown = false;
      track.classList.remove('active');
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    };

    track.addEventListener('mousedown', onMouseDown);
    track.addEventListener('mouseleave', onMouseLeave);
    track.addEventListener('mouseup', onMouseUp);
    track.addEventListener('mousemove', onMouseMove);

    return () => {
      track.removeEventListener('mousedown', onMouseDown);
      track.removeEventListener('mouseleave', onMouseLeave);
      track.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="py-24 lg:py-40 bg-[#F4F4EF] overflow-hidden" id="services">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="text-[#436900] font-medium text-[10px] tracking-[0.2em] uppercase mb-6 reveal">Our Expertise</p>
            <h2 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[0.9] text-[#14140F] reveal">
              World-Class<br /><span className="text-[#436900]">Services</span>
            </h2>
          </div>
          
          <div ref={hintRef} className="drag-hint reveal">
            <span className="material-symbols-outlined text-lg">swipe</span>
            <span className="font-medium">Scroll or drag tags</span>
            <span className="drag-hint-arrow">→</span>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="cards-track px-6 lg:px-[calc((100vw-1152px)/2)] pb-12"
      >
        {SERVICES.map((s, i) => (
          <BoardingPass key={s.title} service={s} index={i} />
        ))}
        <div className="flex-shrink-0 w-24" />
      </div>
    </section>
  );
}

