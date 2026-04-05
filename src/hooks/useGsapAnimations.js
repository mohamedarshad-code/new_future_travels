import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapAnimations(scope) {
  useGSAP(() => {
    // Standard Reveals
    const reveals = gsap.utils.toArray('.gsap-reveal');
    reveals.forEach((el) => {
      gsap.fromTo(el, 
        { 
          opacity: 0, 
          y: 50,
          clipPath: 'inset(100% 0 0 0)'
        }, 
        {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Staggered Reveals (for grids)
    const staggerContainers = gsap.utils.toArray('.gsap-stagger-container');
    staggerContainers.forEach((container) => {
      const items = container.querySelectorAll('.gsap-stagger-item');
      gsap.fromTo(items, 
        { 
          opacity: 0, 
          y: 30 
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

  }, { scope });
}
