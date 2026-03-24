'use client';
import { useState, useEffect, useRef } from 'react';
import { tabs } from '../utils/constants';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

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
            <button key={t.id} className={`px-8 py-3 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-300 border-2 ${activeTab === t.id ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-500/40' : 'bg-white text-gray-500 border-indigo-50 hover:border-indigo-200'}`} onClick={() => setActiveTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 min-h-[160px] content-start">
          {tabs.find(t => t.id === activeTab)?.techs.map((item: string, i: number) => (
            <div key={item} className="bg-white p-6 rounded-3xl border border-indigo-50 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 fade-up" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4 text-indigo-600 font-bold text-sm">{item[0]}</div>
              <div className="text-sm font-black text-gray-900 tracking-tight text-center">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
