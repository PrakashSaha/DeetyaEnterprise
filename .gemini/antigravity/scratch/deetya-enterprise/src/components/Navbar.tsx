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
        className={`fixed top-4 left-0 w-80% z-100 flex items-center justify-between transition-all duration-500 ease-in-out ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-indigo-100/50 py-4 px-6 md:px-12 lg:px-24'
            : 'py-6 px-6 md:px-12 lg:px-24 bg-transparent'
        }`}
      >
        <a
          href="#"
          className="text-xl md:text-2xl font-black tracking-tighter bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent no-underline flex items-center"
        >
          <img
            src="/favicon.ico"
            alt="Logo"
            width="20"
            height="20"
            className="mr-3 rounded-md"
          />
          DeetyaEnterprise
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative no-underline text-gray-600 font-bold text-sm tracking-wide transition-colors duration-200 hover:text-indigo-600"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="hidden md:inline-flex items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 text-white px-7 py-3 rounded-full font-black text-sm tracking-wide transition-all duration-300 shadow-xl shadow-indigo-500/30 hover:scale-105 hover:-translate-y-1 active:scale-95"
        >
          Start Project →
        </a>
        <button
          className="flex md:hidden flex-col gap-1.5 cursor-pointer border-none bg-none p-2 text-gray-900 transition-transform hover:scale-110"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-white/98 backdrop-blur-2xl z-200 flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-8 right-6 text-3xl cursor-pointer text-gray-900 p-2 hover:scale-110 transition-transform"
            onClick={() => setMenuOpen(false)}
          >
            <X size={36} />
          </button>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-3xl font-black text-gray-900 tracking-tighter transition-colors duration-200 hover:text-indigo-600"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            className="text-xl font-black text-white tracking-wide transition-all duration-300 bg-linear-to-r from-indigo-600 to-purple-600 px-12 py-5 rounded-full shadow-2xl shadow-indigo-500/40 hover:scale-105 active:scale-95"
            onClick={() => setMenuOpen(false)}
          >
            Start Project →
          </a>
        </div>
      )}
    </>
  );
}
