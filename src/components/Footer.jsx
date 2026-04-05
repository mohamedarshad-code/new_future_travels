import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-stone-950 full-width py-20 font-[Inter] text-sm text-stone-600 dark:text-stone-400 tonal-shift-bg">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-xl font-black text-stone-900 dark:text-stone-50">New Future Travels</h3>
          <p className="leading-relaxed">Designing the world’s most inspiring journeys for travelers who seek depth, detail, and discovery.</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center"><span className="material-symbols-outlined text-xs">share</span></div>
            <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center"><span className="material-symbols-outlined text-xs">favorite</span></div>
            <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center"><span className="material-symbols-outlined text-xs">camera</span></div>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-stone-900 dark:text-stone-50 font-bold uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link className="hover:translate-x-1 transition-transform inline-block" to="/">Home</Link></li>
            <li><Link className="hover:translate-x-1 transition-transform inline-block" to="/about">About Us</Link></li>
            <li><Link className="hover:translate-x-1 transition-transform inline-block" to="/services">Our Services</Link></li>
            <li><Link className="hover:translate-x-1 transition-transform inline-block" to="/contact">Travel Insurance</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-stone-900 dark:text-stone-50 font-bold uppercase tracking-widest text-xs">Office</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm pt-1">location_on</span>
              <p>Office No.6, First Floor, 1776, Trichy Road, Olymbus, Ramanathapuram,<br />Coimbatore,<br />Tamil Nadu 641045</p>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm pt-1">call</span>
              <p>+91 98436 98394</p>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm pt-1">mail</span>
              <p>info@newfuturetravels.com</p>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-stone-900 dark:text-stone-50 font-bold uppercase tracking-widest text-xs">Newsletter</h4>
          <p>Join the Wayfarer’s Club for exclusive travel insights and early bird packages.</p>
          <div className="flex bg-white rounded-lg p-1 border border-stone-100">
            <input className="bg-transparent border-none focus:ring-0 w-full text-xs text-stone-900 outline-none px-4" placeholder="Email" type="email" />
            <button className="bg-primary text-white px-6 py-2 rounded-md font-bold">Go</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-20 pt-10 border-t border-stone-200 dark:border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p>© 2026 New Future Travels. The Modern Wayfarer.</p>
        <div className="flex gap-8">
          <a className="hover:text-stone-900" href="#">Privacy Policy</a>
          <a className="hover:text-stone-900" href="#">Terms of Service</a>
          <a className="hover:text-stone-900" href="#">Sustainability</a>
        </div>
      </div>
    </footer>
  );
}
