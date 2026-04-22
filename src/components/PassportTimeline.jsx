import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const eras = [
  {
    year: '2009',
    title: 'The Beginning',
    desc: "Founded by A. Mohamed Sirajdheen with a single promise — to treat every traveler's dream as our own. A vision born in Coimbatore that would reach every corner of the globe.",
    country: 'India',
    visa: 'ENTRY VISA',
    inkColor: '#8B1A1A',
    stampText: 'ORIGIN STAMP',
    stampShape: 'round',
    emblem: '✈',
    passportNum: 'NFT-2009-001',
  },
  {
    year: '2014',
    title: 'Global Reach',
    desc: 'Expanded services to cover all 7 continents, forging elite partnerships across 60+ countries. The world became our canvas and every traveler a masterpiece.',
    country: 'International',
    visa: 'MULTIPLE ENTRY',
    inkColor: '#1A4A8B',
    stampText: 'GLOBAL ACCESS',
    stampShape: 'rect',
    emblem: '🌍',
    passportNum: 'NFT-2014-007',
  },
  {
    year: '2019',
    title: 'Luxury Redefined',
    desc: 'Launched our bespoke luxury division — private islands, chartered jets, and untouched villas for discerning wayfarers who demand only the extraordinary.',
    country: 'Elite Class',
    visa: 'PRIORITY ACCESS',
    inkColor: '#6B4C00',
    stampText: 'PREMIUM TIER',
    stampShape: 'diamond',
    emblem: '◆',
    passportNum: 'NFT-2019-VIP',
  },
  {
    year: '2026',
    title: 'A New Future',
    desc: 'Stepping boldly into the next chapter. Modern technology, personalized care, and decades of wisdom — all converging to craft the journeys of tomorrow.',
    country: 'The World',
    visa: 'UNLIMITED ACCESS',
    inkColor: '#1A5C2A',
    stampText: 'NEW FRONTIER',
    stampShape: 'star',
    emblem: '★',
    passportNum: 'NFT-2026-∞',
  },
];

function StampSVG({ shape, color, text, emblem, year }) {
  const c = color;
  if (shape === 'round') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="92" fill="none" stroke={c} strokeWidth="6" />
        <circle cx="100" cy="100" r="80" fill="none" stroke={c} strokeWidth="2" strokeDasharray="4 3" />
        <text x="100" y="60" textAnchor="middle" fill={c} fontSize="26" fontWeight="900" fontFamily="Georgia, serif">{emblem}</text>
        <text x="100" y="105" textAnchor="middle" fill={c} fontSize="30" fontWeight="900" fontFamily="Georgia, serif" letterSpacing="0">{year}</text>
        <text x="100" y="135" textAnchor="middle" fill={c} fontSize="9" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="3">{text}</text>
        <path d="M 40 152 A 68 68 0 0 0 160 152" fill="none" stroke={c} strokeWidth="1.5" />
      </svg>
    );
  }
  if (shape === 'rect') {
    return (
      <svg viewBox="0 0 220 155" className="w-full h-full">
        <rect x="5" y="5" width="210" height="145" rx="6" fill="none" stroke={c} strokeWidth="5" />
        <rect x="12" y="12" width="196" height="131" rx="3" fill="none" stroke={c} strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="110" y="55" textAnchor="middle" fill={c} fontSize="28" fontWeight="900" fontFamily="Georgia, serif" letterSpacing="2">{year}</text>
        <line x1="28" y1="65" x2="192" y2="65" stroke={c} strokeWidth="1.5" />
        <text x="110" y="92" textAnchor="middle" fill={c} fontSize="10" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="4">{text}</text>
        <text x="110" y="130" textAnchor="middle" fill={c} fontSize="28" fontFamily="Georgia, serif">{emblem}</text>
      </svg>
    );
  }
  if (shape === 'diamond') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <polygon points="100,6 194,100 100,194 6,100" fill="none" stroke={c} strokeWidth="5" />
        <polygon points="100,20 180,100 100,180 20,100" fill="none" stroke={c} strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="100" y="90" textAnchor="middle" fill={c} fontSize="24" fontWeight="900" fontFamily="Georgia, serif">{year}</text>
        <text x="100" y="112" textAnchor="middle" fill={c} fontSize="9" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="2">{text}</text>
        <text x="100" y="147" textAnchor="middle" fill={c} fontSize="22" fontFamily="Georgia, serif">{emblem}</text>
      </svg>
    );
  }
  // star burst
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <polygon points="100,8 116,65 175,65 128,100 146,158 100,122 54,158 72,100 25,65 84,65" fill="none" stroke={c} strokeWidth="4" />
      <circle cx="100" cy="100" r="46" fill="none" stroke={c} strokeWidth="2" strokeDasharray="3 2" />
      <text x="100" y="96" textAnchor="middle" fill={c} fontSize="20" fontWeight="900" fontFamily="Georgia, serif" letterSpacing="1">{year}</text>
      <text x="100" y="115" textAnchor="middle" fill={c} fontSize="8" fontWeight="700" fontFamily="'Courier New', monospace" letterSpacing="2">{text}</text>
    </svg>
  );
}

function InkSplat({ color, splatRef }) {
  return (
    <div ref={splatRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0 }}>
      <svg viewBox="0 0 300 300" className="w-full h-full absolute inset-0">
        {[
          [150, 150, 16], [108, 122, 9], [190, 128, 7], [165, 186, 7],
          [128, 194, 5], [90, 166, 6], [196, 165, 5], [118, 104, 4],
          [202, 108, 4], [80, 142, 3], [218, 144, 3], [147, 220, 4],
          [100, 88, 3], [220, 180, 3], [75, 100, 2], [230, 90, 2],
        ].map(([cx, cy, r], idx) => (
          <circle key={idx} cx={cx} cy={cy} r={r} fill={color} opacity="0.65" />
        ))}
        {[
          [150, 150, 118, 78], [150, 150, 186, 73],
          [150, 150, 218, 152], [150, 150, 78, 212],
          [150, 150, 154, 242], [150, 150, 62, 130],
          [150, 150, 238, 70],
        ].map(([x1, y1, x2, y2], idx) => (
          <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        ))}
      </svg>
    </div>
  );
}

export default function PassportTimeline() {
  const sectionRef = useRef(null);
  const cardRefs    = useRef([]);
  const stampRefs   = useRef([]);
  const splatRefs   = useRef([]);
  const pageRefs    = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        const stamp = stampRefs.current[i];
        const splat = splatRefs.current[i];
        const page  = pageRefs.current[i];

        if (!card || !stamp || !splat || !page) return;

        const rotation = (i % 2 === 0 ? 1 : -1) * (6 + Math.random() * 6);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 78%',
            once: true,
          },
        });

        // 1. Card entrance
        tl.from(card, { y: 70, opacity: 0, duration: 0.65, ease: 'power3.out' });

        // 2. Passport cover flips up (scaleY collapses to 0 = page "opens")
        tl.to(page, {
          scaleY: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          transformOrigin: 'top center',
        }, '-=0.15');

        // 3. Stamp slams down
        tl.fromTo(stamp,
          { y: -160, scaleX: 1.3, scaleY: 0.05, opacity: 0, rotate: rotation * 0.5 },
          { y: 0, scaleX: 1, scaleY: 1, opacity: 1, rotate: rotation, duration: 0.28, ease: 'expo.in' },
          '-=0.05'
        );

        // 4. Impact squash
        tl.to(stamp, { scaleY: 0.8, scaleX: 1.15, duration: 0.07, ease: 'power2.out' });

        // 5. Bounce recover
        tl.to(stamp, { scaleY: 1, scaleX: 1, duration: 0.4, ease: 'elastic.out(1.2, 0.4)' });

        // 6. Ink splat burst
        tl.fromTo(splat,
          { opacity: 0, scale: 0.2 },
          { opacity: 1, scale: 1, duration: 0.2, ease: 'power4.out' },
          `-=${0.4 + 0.07}`
        );
        tl.to(splat, { opacity: 0, scale: 1.6, duration: 0.5, ease: 'power2.in', delay: 0.1 });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="legacy-timeline"
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #f5f0e6 0%, #ece6d4 50%, #e4dcc4 100%)' }}
    >
      {/* Paper grain SVG overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-mono text-[10px] tracking-[0.5em] text-stone-500 uppercase mb-4">Official Travel Documents</p>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-[0.95] text-stone-900">
            Our Legacy<br />
            <span style={{ color: '#436900' }}>Passport</span>
          </h2>
          <p className="mt-5 text-base lg:text-lg text-stone-500 max-w-md mx-auto font-medium leading-relaxed">
            Every great journey leaves a stamp. Scroll to reveal ours.
          </p>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-stone-300" />
            <span className="text-stone-400 text-xs font-mono tracking-widest">✈</span>
            <div className="h-px w-16 bg-stone-300" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {eras.map((era, i) => (
            <div
              key={era.year}
              ref={el => (cardRefs.current[i] = el)}
              className="relative"
              style={{ perspective: '900px' }}
            >
              <div
                className="relative rounded-xl overflow-visible"
                style={{
                  background: 'linear-gradient(145deg, #faf6eb 0%, #f2ebd5 55%, #e9dfc0 100%)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)',
                  border: '1px solid rgba(180,155,100,0.22)',
                }}
              >
                {/* Inner worn-edge shadow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-xl pointer-events-none z-[5]"
                  style={{ boxShadow: 'inset 0 0 32px rgba(100,75,30,0.12), inset 0 0 6px rgba(70,50,10,0.08)' }}
                />

                {/* Horizontal ruled lines (paper texture) */}
                <div aria-hidden="true" className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none opacity-[0.05]">
                  {Array.from({ length: 20 }).map((_, j) => (
                    <div key={j} className="w-full" style={{ borderBottom: '1px solid #5a4010', height: '22px' }} />
                  ))}
                </div>

                {/* ── Passport header bar ── */}
                <div
                  className="px-5 py-3.5 flex items-center justify-between border-b rounded-t-xl"
                  style={{
                    borderColor: 'rgba(160,130,80,0.2)',
                    background: `linear-gradient(90deg, ${era.inkColor}14 0%, transparent 80%)`,
                  }}
                >
                  <div>
                    <p
                      className="font-mono text-[8px] tracking-[0.45em] uppercase font-black"
                      style={{ color: era.inkColor }}
                    >
                      {era.visa}
                    </p>
                    <p className="font-mono text-[7px] text-stone-400 tracking-widest mt-0.5">{era.passportNum}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div>
                      <p className="font-mono text-[7px] text-stone-400 tracking-widest uppercase text-right">Destination</p>
                      <p className="font-mono text-[9px] font-black text-stone-600 text-right">{era.country}</p>
                    </div>
                    <div
                      className="w-9 h-9 rounded-full border flex items-center justify-center text-base font-black shrink-0"
                      style={{ borderColor: `${era.inkColor}60`, color: era.inkColor, background: `${era.inkColor}10` }}
                    >
                      {era.emblem}
                    </div>
                  </div>
                </div>

                {/* ── Card body ── */}
                <div className="px-6 pt-5 pb-7 relative">
                  {/* Ghost year watermark */}
                  <span
                    className="absolute right-4 top-2 font-black font-mono select-none pointer-events-none"
                    style={{ fontSize: 'clamp(52px, 10vw, 80px)', color: era.inkColor, opacity: 0.07, lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {era.year}
                  </span>

                  <div className="relative z-[2]">
                    <p
                      className="font-mono text-[9px] tracking-[0.4em] uppercase font-bold mb-2"
                      style={{ color: era.inkColor }}
                    >
                      {era.year} — {era.country}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-black text-stone-900 mb-3 leading-tight">{era.title}</h3>
                    <p className="text-stone-600 leading-relaxed text-sm lg:text-[15px]">{era.desc}</p>
                  </div>

                  {/* MRZ machine-readable zone */}
                  <div className="mt-6 pt-4 border-t" style={{ borderColor: 'rgba(160,130,80,0.15)' }}>
                    <p className="font-mono text-[7.5px] text-stone-300 tracking-[0.1em] break-all leading-relaxed">
                      {`P<IND${era.title.toUpperCase().replace(/\s/g, '<')}<<<<<<<<<<<<<<`.slice(0, 44)}
                    </p>
                    <p className="font-mono text-[7.5px] text-stone-300 tracking-[0.1em] break-all leading-relaxed">
                      {`${era.passportNum}IND${era.year}0101M30010190<<<<<<<<<<<4`.slice(0, 44)}
                    </p>
                  </div>
                </div>

                {/* ── Passport cover overlay (flies up on scroll) ── */}
                <div
                  ref={el => (pageRefs.current[i] = el)}
                  aria-hidden="true"
                  className="absolute inset-0 rounded-xl z-20 flex flex-col items-center justify-center gap-3"
                  style={{
                    background: 'linear-gradient(145deg, #2e1a0e 0%, #1c0f08 100%)',
                    boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)',
                    transformOrigin: 'top center',
                  }}
                >
                  {/* Cover gold emblem */}
                  <div
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center text-3xl"
                    style={{ borderColor: '#BF9722', color: '#BF9722' }}
                  >
                    {era.emblem}
                  </div>
                  <p style={{ color: '#BF9722' }} className="font-serif text-base font-bold tracking-[0.3em] uppercase">New Future</p>
                  <p style={{ color: '#BF9722' }} className="font-serif text-[10px] tracking-[0.5em] uppercase opacity-60">Travels · Est. 2009</p>
                  <div className="w-12 h-px" style={{ background: '#BF9722', opacity: 0.5 }} />
                  <p style={{ color: '#BF9722' }} className="font-mono text-[8px] tracking-widest uppercase opacity-30">scroll to stamp</p>
                </div>

                {/* ── Ink splat burst ── */}
                <div aria-hidden="true" className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none z-30">
                  <InkSplat color={era.inkColor} splatRef={el => (splatRefs.current[i] = el)} />
                </div>

                {/* ── Rubber stamp ── */}
                <div
                  ref={el => (stampRefs.current[i] = el)}
                  aria-label={`${era.year} rubber stamp`}
                  className="absolute z-40 pointer-events-none"
                  style={{
                    width: era.stampShape === 'rect' ? '155px' : '125px',
                    height: era.stampShape === 'rect' ? '105px' : '125px',
                    right: '20px',
                    bottom: '55px',
                    opacity: 0,
                    filter: `drop-shadow(2px 4px 8px ${era.inkColor}70)`,
                  }}
                >
                  <StampSVG
                    shape={era.stampShape}
                    color={era.inkColor}
                    text={era.stampText}
                    emblem={era.emblem}
                    year={era.year}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="text-center mt-16 space-y-2">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-stone-300" />
            <span className="text-stone-400 text-xs font-mono tracking-widest">◆</span>
            <div className="h-px w-20 bg-stone-300" />
          </div>
          <p className="font-mono text-[9px] text-stone-400 tracking-[0.4em] uppercase">
            Est. 2009 · Coimbatore, India · {eras.length} Chapters &amp; Counting
          </p>
        </div>
      </div>
    </section>
  );
}
