'use client';
import { useEffect, useRef } from 'react';

import { cases } from '../utils/constants';

export default function CaseStudies() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-12 bg-indigo-50/40 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-size-[48px_48px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="fade-up text-center mb-16">
          <span className="inline-flex items-center gap-2 border border-indigo-200/50 text-indigo-700 py-1.5 px-5 rounded-full text-xs font-bold mb-6 tracking-widest uppercase shadow-md shadow-indigo-500/5 bg-white/60">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
            Results That <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Speak</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cases.map((c, i) => (
            <div key={i} className={`bg-white rounded-3xl overflow-hidden border border-indigo-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(99,102,241,0.12)] hover:border-indigo-300 group fade-up d${i + 1}`}>
              <div className="relative w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none z-10" />
                <div className="absolute top-0 inset-x-0 h-1 z-20" style={{ background: c.accent }} />
                <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <span className="text-xs font-bold tracking-widest uppercase py-1.5 px-4 rounded-full inline-block mb-4 border" style={c.industryStyle}>{c.industry}</span>
                <div className="text-xl font-black mb-6 leading-tight tracking-tight text-gray-900">{c.title}</div>
                <div className="mb-6 space-y-4">
                  <div>
                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">Problem</div>
                    <div className="text-sm text-gray-600 font-medium leading-relaxed">{c.problem}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">Solution</div>
                    <div className="text-sm text-gray-600 font-medium leading-relaxed">{c.solution}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">Result</div>
                    <div className="text-sm font-bold text-emerald-600 bg-emerald-50 py-1.5 px-3 rounded-lg inline-block border border-emerald-200/60 shadow-sm">{c.result}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.stack.map(s => <span key={s} className="text-xs font-bold bg-indigo-50 text-indigo-700 py-1.5 px-3.5 rounded-full border border-indigo-100/50">{s}</span>)}
                </div>
                <button className="bg-transparent border-none text-indigo-600 font-bold text-sm cursor-pointer inline-flex items-center gap-1.5 transition-all duration-300 p-0 mt-8 group-hover:translate-x-1 group-hover:text-indigo-800">
                  Read More <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
