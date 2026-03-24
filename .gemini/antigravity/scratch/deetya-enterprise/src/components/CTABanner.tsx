'use client';
import { useEffect, useRef } from 'react';
import { Mail, Calendar } from 'lucide-react';

export default function CTABanner() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="cta" className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-linear-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-500/40 fade-up">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-tight mt-0">
              Ready to Build Something <br className="hidden md:block" /> Extraordinary?
            </h2>
            <p className="text-indigo-100 text-lg md:text-2xl mb-12 font-medium opacity-90 max-w-2xl mx-auto leading-relaxed">
              Stop waiting for the perfect moment. Let&apos;s architect your vision with the power of modern AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
              <a href="mailto:contact@deetya.enterprise" className="flex items-center justify-center gap-4 bg-white text-indigo-700 font-black text-xl py-5 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-white/20 w-full sm:w-auto">
                <Mail size={24} /> Email Us
              </a>
              <a href="#" className="flex items-center justify-center gap-4 bg-indigo-500/20 text-white font-black text-xl py-5 px-10 rounded-full border-2 border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white w-full sm:w-auto">
                <Calendar size={24} /> Book a Free Call
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-14 pt-10 border-t border-white/10">
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-black">24h</span>
                <span className="text-[10px] md:text-xs text-indigo-200 font-black tracking-widest uppercase mt-1">Response Time</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-black">100%</span>
                <span className="text-[10px] md:text-xs text-indigo-200 font-black tracking-widest uppercase mt-1">IP Ownership</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl md:text-3xl font-black">Security</span>
                <span className="text-[10px] md:text-xs text-indigo-200 font-black tracking-widest uppercase mt-1">ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
