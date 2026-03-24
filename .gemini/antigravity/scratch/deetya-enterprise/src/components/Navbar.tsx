'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks as links } from '../utils/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-1000 flex items-center justify-between transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg py-4 px-6 md:px-12 lg:px-24'
            : 'py-6 px-6 md:px-12 lg:px-24'
        }`}
      >
        <a
          href="#"
          className="text-xl md:text-2xl font-black tracking-tighter bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent no-underline"
        >
          <img
            src="/favicon.ico"
            alt="DeetyaEnterprise logo"
            width="18"
            height="18"
            style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8, borderRadius: '4px' }}
          />
          DeetyaEnterprise
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative no-underline text-gray-600 font-semibold text-sm tracking-wide transition-colors duration-200 hover:text-indigo-600"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="hidden md:inline-flex items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:scale-105 hover:-translate-y-0.5 hover:shadow-indigo-500/50"
        >
          Start a Project →
        </a>
        <button
          className="flex md:hidden flex-col gap-1.5 cursor-pointer border-none bg-none p-2 text-gray-800 hover:text-indigo-600 transition-colors"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={22} color="var(--dark)" />
        </button>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-1500 flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-8 right-6 md:right-12 text-3xl cursor-pointer text-gray-800 hover:text-indigo-600 transition-colors p-2"
            onClick={() => setMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-2xl font-extrabold text-gray-900 tracking-tight transition-colors duration-200 hover:text-indigo-600"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="text-lg font-bold text-white tracking-wide transition-all duration-300 bg-linear-to-r from-indigo-600 to-purple-600 px-10 py-4 rounded-full shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project →
          </a>
        </div>
      )}
    </>
  );
}
