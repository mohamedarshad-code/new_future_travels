import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Home", gate: "NFT-01" },
    { to: "/about", label: "About", gate: "NFT-02" },
    { to: "/services", label: "Services", gate: "NFT-03" },
    { to: "/testimonials", label: "Stories", gate: "NFT-04" },
    { to: "/contact", label: "Contact", gate: "NFT-05" }
  ];

  return (
    <nav id="navbar" className="fixed top-0 w-full z-[200] transition-all duration-500 py-6 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link className="relative z-[210] flex items-center gap-3 active:scale-95 transition-transform" to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="New Future Travels" className="h-10 lg:h-12 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 ${isActive ? 'text-[#436900]' : 'text-[#14140F]/40 hover:text-[#14140F]'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary py-3 px-8 text-[11px]">
            Enquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-[210] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-[#14140F] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#14140F] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#14140F] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Luxury Mobile Overlay */}
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full p-8 md:p-24 justify-center">
          <p className="text-[#436900] font-medium text-[10px] tracking-[0.3em] uppercase mb-10 opacity-60">Navigation Terminal</p>
          
          <div className="flex flex-col gap-4 md:gap-8">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `mobile-nav-link font-medium tracking-tighter transition-all duration-300 ${isActive ? 'text-[#436900]' : 'text-[#14140F]'}`
                }
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="text-[10px] font-mono opacity-20">{link.gate}</span>
                  {link.label}
                </div>
              </NavLink>
            ))}
          </div>

          <div className="mt-16 md:mt-24 pt-10 border-t border-[#14140F]/5 flex flex-col gap-3">
             <p className="text-[9px] font-medium tracking-widest uppercase text-[#14140F]/30">Current Status</p>
             <p className="text-lg font-medium text-[#14140F]">NFT-Home Terminal</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
