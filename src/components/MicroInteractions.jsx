import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

export default function MicroInteractions() {
  const { pathname } = useLocation();

  useEffect(() => {
    // --- 0. Smooth Scroll (Lenis) ---
    const lenis = new Lenis();
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // --- 1. Custom Cursor ---
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let dotX = mouseX;
    let dotY = mouseY;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Dot follows instantly but with a tiny bit of smoothing
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    let ringAnim;
    const updateCursor = () => {
      // Ring follows with lag (lerp)
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      ringAnim = requestAnimationFrame(updateCursor);
    };
    ringAnim = requestAnimationFrame(updateCursor);

    // Only hide system cursor on non-touch devices
    if (!window.matchMedia('(pointer: coarse)').matches) {
      document.documentElement.style.cursor = 'none';
    } else {
      dot.style.display = 'none';
      ring.style.display = 'none';
    }

    window.addEventListener('mousemove', onMouseMove);

    // Hover states
    const onHoverStart = (e) => {
      const target = e.target.closest('a, button, .interactive');
      if (target) {
        ring.classList.add('hover');
        dot.classList.add('hover');
      }
    };

    const onHoverEnd = (e) => {
      const target = e.target.closest('a, button, .interactive');
      if (target) {
        ring.classList.remove('hover');
        dot.classList.remove('hover');
      }
    };

    window.addEventListener('mouseover', onHoverStart);
    window.addEventListener('mouseout', onHoverEnd);

    // --- 2. Sticky Navbar Scroll ---
    let lastScroll = 0;
    const onScroll = () => {
      const current = window.scrollY;
      const nav = document.querySelector('nav');
      if (!nav) return;

      nav.style.backdropFilter = current > 50 ? 'blur(24px)' : 'blur(16px)';
      nav.style.background = current > 50 
        ? 'rgba(250,250,245,0.88)' 
        : 'rgba(250,250,245,0.75)';
      
      nav.style.boxShadow = current > 50
        ? '0 8px 48px rgba(20,20,15,0.05)'
        : 'none';

      if (current > lastScroll && current > 100) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      lastScroll = current;
    };
    window.addEventListener('scroll', onScroll);

    // --- 3. Reveal Animations ---
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    const setupReveals = () => {
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    };
    setupReveals();

    // --- 4. Countup Animations ---
    function animateCount(el, target, duration = 2000) {
      const start = performance.now();
      const isFloat = target % 1 !== 0;
      
      function update(time) {
        const elapsed = time - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = isFloat ? (eased * target).toFixed(1) : Math.floor(eased * target);
        el.textContent = current + (isFloat ? '' : '+');
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }

    const countupObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseFloat(entry.target.dataset.target);
          animateCount(entry.target, target);
          countupObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const setupCountups = () => {
      document.querySelectorAll('[data-countup]').forEach(el => countupObserver.observe(el));
    };
    setupCountups();

    // Cleanup
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      dot.remove();
      ring.remove();
      document.documentElement.style.cursor = 'auto';
      cancelAnimationFrame(ringAnim);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onHoverStart);
      window.removeEventListener('mouseout', onHoverEnd);
      window.removeEventListener('scroll', onScroll);
      revealObserver.disconnect();
      countupObserver.disconnect();
    };
  }, [pathname]); // Re-run on page change to re-observe new elements

  return null;
}
