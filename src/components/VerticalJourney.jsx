import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  { id: "01", name: "Luxury Bespoke", desc: "Private islands, chartered jets, and untouched villas. Experience the pinnacle of exclusivity.", icon: "diamond" },
  { id: "02", name: "Global Expeditions", desc: "From the peaks of the Andes to the depths of the Amazon. Push the boundaries of your world.", icon: "map" },
  { id: "03", name: "Cultural Immersion", desc: "Dine with monks in Kyoto or learn ancient weaving in Peru. Connect with the soul of a place.", icon: "temple_buddhist" },
  { id: "04", name: "Corporate & Elite", desc: "Seamless logistics for those who value time and precision. Worldwide support for every mission.", icon: "work" },
  { id: "05", name: "Family Milestones", desc: "Create ancestral memories that will be told for generations. We handle the joy, you enjoy the moment.", icon: "family_restroom" }
];

export default function VerticalJourney() {
  const containerRef = useRef(null);
  const rightColumnRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    const itemsHeight = rightColumnRef.current.clientHeight;
    // We want to scroll such that the last item stops in the frame center (roughly 400px fixed height view)
    const scrollDistance = itemsHeight - 400; 

    gsap.to(rightColumnRef.current, {
      y: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${itemsHeight}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        snap: {
          snapTo: 1 / (specialties.length - 1),
          duration: 0.2,
          delay: 0,
        }
      }
    });

    itemsRef.current.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 50%',
          end: 'bottom 50%',
          toggleClass: { targets: item, className: 'active-card-glow' },
          containerAnimation: null // This is for local triggers within the pinned container
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="bg-white text-stone-900 min-h-screen flex items-center overflow-hidden font-[Inter]"
    >
      <div className="max-w-7xl mx-auto w-full px-8 flex relative h-[400px]">
        {/* Left Column - Fixed */}
        <div className="w-1/2 flex items-center">
          <div className="max-w-md">
            <div className="h-1.5 w-24 bg-primary mb-8"></div>
            <h2 className="text-6xl font-black tracking-tight leading-tight">
              Crafting Your<br/>
              <span className="text-primary uppercase tracking-tighter">Next Chapter</span>
            </h2>
            <p className="mt-8 text-xl text-stone-500 font-medium leading-relaxed">
              Scroll to explore the different ways we turn a simple trip into a legendary voyage. 
            </p>
          </div>
        </div>

        {/* Right Column - Scrolling */}
        <div className="w-1/2 relative">
          <div 
            ref={rightColumnRef} 
            className="absolute top-0 right-0 w-full flex flex-col gap-10"
          >
            {specialties.map((item, index) => (
              <div 
                key={item.id}
                ref={el => itemsRef.current[index] = el}
                className="vertical-journey-item p-10 bg-stone-50 border-4 border-stone-100 rounded-3xl min-h-[360px] flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-5xl text-primary">{item.icon}</span>
                  <span className="text-6xl font-black text-stone-200 tracking-tighter">{item.id}</span>
                </div>
                <div>
                  <h3 className="text-4xl font-black mb-4">{item.name}</h3>
                  <p className="text-stone-500 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
