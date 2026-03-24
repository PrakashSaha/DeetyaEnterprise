'use client';
import { useState, useEffect, useRef } from 'react';

import { tabs } from '../utils/constants';

export default function TechStack() {
  const [active, setActive] = useState('ai');
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const current = tabs.find(t => t.id === active)!;
  return (
    <section id="stack" className="py-24 md:py-32 px-6 md:px-12 bg-indigo-50/40" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-20 md:mb-24 fade-up text-center">
          <span className="block mx-auto w-fit border border-indigo-200/50 text-indigo-700 py-2 px-6 rounded-full text-xs font-bold tracking-widest uppercase shadow-md shadow-indigo-500/5 bg-white/80">
            Our Toolkit
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight max-w-4xl">
            Technology <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="max-w-2xl text-gray-600 text-lg md:text-xl font-medium leading-relaxed">We leverage the most advanced technologies to build future-ready software infrastructures.</p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center mt-10 mb-10">
          {tabs.map(t => (
            <button key={t.id} className={`py-2.5 px-6 rounded-full text-sm font-bold cursor-pointer border border-indigo-200/50 bg-white/80 text-gray-600 transition-all duration-300 tracking-wide backdrop-blur-md shadow-sm hover:shadow-md ${active === t.id ? 'bg-linear-to-r from-indigo-600 to-purple-600 border-transparent! text-white! shadow-indigo-500/30 scale-105' : 'hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50'}`} onClick={() => setActive(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4 py-4">
          {current.techs.map(tech => (
            <span key={tech} className="flex items-center gap-2 py-3 px-6 rounded-full bg-white border border-indigo-100 text-sm font-bold text-gray-800 transition-all duration-300 shadow-sm hover:border-indigo-400 hover:bg-indigo-50 hover:-translate-y-1 hover:shadow-md hover:shadow-indigo-500/10 hover:text-indigo-700">⚙️ {tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
