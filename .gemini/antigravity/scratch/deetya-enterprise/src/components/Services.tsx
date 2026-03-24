'use client';
import { useEffect, useRef } from 'react';
import { services } from '../utils/constants';

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 mb-20 md:mb-24 fade-up text-center">
          <span className="block mx-auto w-fit border border-indigo-200/50 text-indigo-700 py-2 px-6 rounded-full text-xs font-bold tracking-widest uppercase shadow-md shadow-indigo-500/5 bg-indigo-50/50">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight max-w-4xl">
            Services Built Around <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Intelligence</span>
          </h2>
          <p className="max-w-2xl text-gray-600 text-lg md:text-xl font-medium leading-relaxed">We deliver specialized AI and software engineering services designed to scale your business.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className={`bg-white border border-indigo-100 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300 before:content-[''] before:absolute before:top-0 before:inset-x-0 before:h-1.5 before:bg-linear-to-r before:from-indigo-500 before:to-purple-500 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100 fade-up d${i + 1}`}>
              <div>
                <div className="text-3xl w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 border border-indigo-100 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <s.Icon size={28} strokeWidth={2} />
                </div>
                <div className="text-xl font-extrabold mb-3 text-gray-900 tracking-tight">{s.title}</div>
              </div>
              
              <div className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
