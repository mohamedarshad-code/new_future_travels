import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#F4F4EF] py-24 lg:py-32 overflow-hidden border-t border-[#14140F]/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          
          {/* Brand */}
          <div className="reveal">
            <Link to="/" className="inline-block mb-8">
              <img src={logo} alt="New Future Travels" className="h-12 w-auto" />
            </Link>
            <p className="text-sm text-[#14140F]/60 leading-relaxed max-w-xs">
              Designing the world’s most inspiring journeys for travelers who seek depth, detail, and discovery.
            </p>
          </div>

          {/* Links */}
          <div className="reveal reveal-delay-1">
            <p className="text-[#14140F]/30 text-[10px] tracking-[0.2em] uppercase mb-8">Navigation</p>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Stories', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-sm text-[#14140F] hover:text-[#436900] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="reveal reveal-delay-2">
            <p className="text-[#14140F]/30 text-[10px] tracking-[0.2em] uppercase mb-8">Contact Terminal</p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="material-symbols-outlined text-[#436900] text-lg">location_on</span>
                <p className="text-sm text-[#14140F] leading-relaxed">
                  1776, Trichy Road, Coimbatore,<br />Tamil Nadu 641045
                </p>
              </li>
              <li className="flex gap-4 text-sm text-[#14140F]">
                <span className="material-symbols-outlined text-[#436900] text-lg">call</span>
                +91 98436 98394
              </li>
              <li className="flex gap-4 text-sm text-[#14140F]">
                <span className="material-symbols-outlined text-[#436900] text-lg">mail</span>
                info@newfuturetravels.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="reveal reveal-delay-3">
            <p className="text-[#14140F]/30 text-[10px] tracking-[0.2em] uppercase mb-8">Newsletter</p>
            <p className="text-sm text-[#14140F]/60 mb-8 leading-relaxed">
              Join our list for exclusive early bird packages and travel insights.
            </p>
            <div className="flex bg-white rounded-full p-1.5 border border-[#14140F]/5">
              <input 
                className="bg-transparent border-none focus:ring-0 w-full text-xs text-[#14140F] outline-none px-6" 
                placeholder="Your email address" 
                type="email" 
              />
              <button className="bg-[#436900] text-white px-6 py-3 rounded-full text-[10px] font-medium tracking-widest uppercase hover:bg-[#324e00] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-[#14140F]/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-medium tracking-widest uppercase text-[#14140F]/30">
            © 2026 New Future Travels · The Modern Wayfarer
          </p>
          <div className="flex gap-10">
            {['Privacy', 'Terms', 'Sustainability'].map(l => (
              <a key={l} href="#" className="text-[10px] font-medium tracking-widest uppercase text-[#14140F]/30 hover:text-[#14140F] transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

