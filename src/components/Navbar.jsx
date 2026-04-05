import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) => 
    `text-stone-500 dark:text-stone-400 hover:text-lime-600 dark:hover:text-lime-300 transition-all duration-300 relative ${
      isActive ? 'text-stone-900 dark:text-stone-50' : ''
    }`;

  const activeIndicator = ({ isActive }) => 
    isActive ? <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-lime-500 animate-fade-in"></span> : null;

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-sm shadow-stone-900/5">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <Link className="text-2xl font-black tracking-tighter text-stone-900 dark:text-stone-50" to="/">
          New Future Travels
        </Link>
        <div className="hidden md:flex items-center gap-10 font-bold tracking-tight">
          <NavLink className={navLinkClasses} to="/">
            {({ isActive }) => (<>Home{activeIndicator({ isActive })}</>)}
          </NavLink>
          <NavLink className={navLinkClasses} to="/about">
            {({ isActive }) => (<>About{activeIndicator({ isActive })}</>)}
          </NavLink>
          <NavLink className={navLinkClasses} to="/services">
            {({ isActive }) => (<>Services{activeIndicator({ isActive })}</>)}
          </NavLink>
          <NavLink className={navLinkClasses} to="/testimonials">
            {({ isActive }) => (<>Testimonials{activeIndicator({ isActive })}</>)}
          </NavLink>
          <NavLink className={navLinkClasses} to="/contact">
            {({ isActive }) => (<>Contact{activeIndicator({ isActive })}</>)}
          </NavLink>
        </div>
        <div className="hidden md:block">
          <Link className="px-8 py-3 rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-bold hover:scale-95 duration-200 ease-in-out shadow-lg shadow-primary/20" to="/contact">
            Contact Us
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined text-3xl p-2">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-8 pb-10 space-y-6 font-bold flex flex-col bg-stone-50 dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 pt-6 animate-fade-in-up">
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => `text-2xl ${isActive ? 'text-primary' : 'text-stone-500'}`} to="/">Home</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => `text-2xl ${isActive ? 'text-primary' : 'text-stone-500'}`} to="/about">About</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => `text-2xl ${isActive ? 'text-primary' : 'text-stone-500'}`} to="/services">Services</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => `text-2xl ${isActive ? 'text-primary' : 'text-stone-500'}`} to="/testimonials">Testimonials</NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => `text-2xl ${isActive ? 'text-primary' : 'text-stone-500'}`} to="/contact">Contact</NavLink>
        </div>
      )}
    </nav>
  );
}
