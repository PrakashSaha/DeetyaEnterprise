'use client';
import { useEffect, useRef } from 'react';
import { stats } from '../utils/constants';

export default function Stats() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        el.querySelectorAll('.stat-card').forEach((card, i) => {
          const target = parseInt(card.getAttribute('data-target') || '0');
          const span = card.querySelector('.target-num');
          if (!span) return;
          
          let count = 0;
          const duration = 2000;
          const stepSize = target / (duration / 16);
          const tick = () => {
            count += stepSize;
            if (count < target) {
              span.textContent = Math.floor(count).toString();
              requestAnimationFrame(tick);
            } else {
              span.textContent = target.toString();
            }
          };
          tick();
        });
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -150px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" className="py-24 md:py-32 px-6 md:px-12 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-card bg-indigo-50/30 border border-indigo-100 rounded-4xl p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 group"
              data-target={s.target}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 shadow-lg shadow-indigo-500/5 bg-white border border-indigo-50">
                <s.Icon size={32} style={{ color: s.iconColor }} />
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="target-num text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">0</span>
                <span className="text-3xl md:text-4xl font-black tracking-tight" style={{ color: s.suffixColor }}>{s.suffix}</span>
              </div>
              <h4 className="text-xl font-black text-gray-900 mb-3 tracking-tight">{s.title}</h4>
              <p className="text-gray-500 font-bold leading-relaxed whitespace-pre-line text-sm md:text-base">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
