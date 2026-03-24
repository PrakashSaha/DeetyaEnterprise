'use client';
import { useEffect, useRef } from 'react';
import { steps } from '../utils/constants';

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20 md:mb-24 gap-12 fade-up text-center lg:text-left translate-y-0 opacity-100 transition-all duration-700">
          <div className="max-w-4xl">
            <span className="block mx-auto lg:mx-0 w-fit border border-blue-200/50 text-blue-700 py-2 px-6 rounded-full text-xs font-bold tracking-widest uppercase shadow-md shadow-blue-500/5 bg-blue-50/50 mb-8">
              Development Process
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tighter">
              Structured Development Approach<br className="hidden lg:block"/>
              Aimed For Maximum Impact
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl font-medium">
              We turn business challenges into growth with end-to-end software development solutions built through a clear, proven, and efficient process.
            </p>
          </div>
          <div className="w-full lg:w-auto shrink-0 transition-transform duration-300 hover:scale-105">
            <a href="#cta" className="inline-flex items-center justify-center bg-linear-to-r from-blue-600 to-indigo-600 text-white font-black text-xl py-5 px-12 rounded-full border-none cursor-pointer shadow-2xl shadow-blue-500/30 transition-all duration-300 w-full lg:w-auto">
              Get a Free Quote →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-100/50 border border-indigo-50">
          {steps.map((s, i) => (
            <div key={s.num} className="p-10 odd:bg-indigo-50/80 even:bg-blue-50/60 hover:bg-white transition-colors duration-300 fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-indigo-900 text-indigo-950 text-lg font-black shadow-sm bg-white/50">{s.num}</div>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">{s.title}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium m-0">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
