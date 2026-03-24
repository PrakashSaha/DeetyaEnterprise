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
    <section id="industries" className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden" ref={ref}>
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
            <div key={i} className={`bg-white border border-indigo-100/50 rounded-3xl p-8 text-left transition-all duration-300 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300 fade-up d${i + 1}`}>
              <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 bg-indigo-50/50 rounded-2xl border border-indigo-100 shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300" style={{ background: ind.bg, borderColor: `${ind.color}33` }}>
                  <ind.Icon size={28} color={ind.color} strokeWidth={2} />
                </div>
                <div className="text-xl font-extrabold tracking-tight text-gray-900">{ind.name}</div>
              </div>
              <ul className="relative z-10 list-none p-0 m-0 flex flex-col gap-3">
                {ind.items.map((item, j) => (
                  <li key={j} className="text-sm md:text-base text-gray-500 font-medium leading-relaxed flex items-start gap-3">
                    <span className="text-indigo-500 font-black text-lg leading-none mt-0.5">•</span>
                    <span>{item}</span>
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
