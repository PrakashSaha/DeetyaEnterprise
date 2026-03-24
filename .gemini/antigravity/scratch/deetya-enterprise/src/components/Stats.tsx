'use client';
import { useEffect, useRef } from 'react';
import { stats } from '../utils/constants';

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true;
        el.querySelectorAll<HTMLElement>('[data-target]').forEach(num => {
          const target = +(num.dataset.target ?? 0);
          let cur = 0;
          const step = Math.max(target / 40, 1);
          const tick = () => {
            cur = Math.min(cur + step, target);
            num.textContent = Math.floor(cur).toString();
            if (cur < target) requestAnimationFrame(tick);
          };
          tick();
        });
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -150px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-linear-to-b from-indigo-50/50 to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border border-indigo-50 rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] transition-all duration-300 flex flex-col items-start group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110 shadow-sm" style={{ background: s.iconBg, color: s.iconColor }}>
              <s.Icon size={32} strokeWidth={2} />
            </div>
            
            <div className="flex items-baseline mb-3">
              <span className="text-5xl font-black tracking-tighter text-gray-900" data-target={s.target}>0</span>
              <span className="text-3xl font-bold ml-1" style={{ color: s.suffixColor }}>{s.suffix}</span>
            </div>
            
            <div className="text-lg font-extrabold text-gray-900 mb-2">{s.title}</div>
            <p className="text-sm font-medium text-gray-500 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
