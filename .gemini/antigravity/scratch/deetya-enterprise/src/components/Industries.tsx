'use client';
import { useEffect, useRef } from 'react';
import { industries } from '../utils/constants';

export default function Industries() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="industries" className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden scroll-mt-32" ref={ref}>
      <div className="absolute inset-0 bg-linear-to-t from-indigo-50/50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6 mb-20 md:mb-24 fade-up text-center">
          <span className="block mx-auto w-fit border border-indigo-200/50 text-indigo-700 py-2 px-6 rounded-full text-xs font-bold tracking-widest uppercase shadow-md shadow-indigo-500/5 bg-indigo-50/50">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight max-w-4xl">
            Who We <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Build For</span>
          </h2>
          <p className="max-w-2xl text-gray-600 text-lg md:text-xl font-medium leading-relaxed">We specialize in delivering high-impact AI and software solutions across diverse industry verticals.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {industries.map((ind, i) => (
            <div key={i} className={`bg-white border border-indigo-50 rounded-3xl p-8 transition-all duration-500 fade-up d${(i % 4) + 1} hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)] hover:-translate-y-2 group`}>
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 duration-300">
                <ind.Icon size={32} />
              </div>
              <h3 className="text-xl font-black mb-4 text-gray-900 tracking-tight">{ind.name}</h3>
              <ul className="space-y-3">
                {ind.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-indigo-600 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
