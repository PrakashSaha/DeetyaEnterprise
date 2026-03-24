'use client';
import { useEffect, useRef } from 'react';
import { Mail, Phone, MessageCircle, ExternalLink } from 'lucide-react';

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
    <section id="cta" className="bg-linear-to-r from-indigo-700 via-indigo-600 to-purple-800 relative overflow-hidden text-center py-24 px-6 md:py-32 md:px-12" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px] pointer-events-none" />
      <div className="relative z-10 fade-up max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-md">Ready to Build Something Extraordinary?</h2>
        <p className="text-indigo-100/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-10">Tell us about your project. We&apos;ll respond within 24 hours with a clear plan — no sales pitch, just solutions.</p>
        <div className="flex gap-4 justify-center flex-wrap mb-10">
          <a href="mailto:hello@deetyaenterprise.com" className="bg-white text-indigo-700 py-4 px-8 rounded-full font-black text-lg transition-all duration-300 inline-flex items-center gap-3 tracking-tight shadow-xl shadow-cyan-900/20 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">
            <Mail size={20} /> Email Us
          </a>
          <a href="#" className="border-2 border-white/40 text-white py-4 px-8 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center gap-3 backdrop-blur-md bg-white/5 hover:bg-white/20 hover:border-white hover:-translate-y-1">Book a Free Call</a>
        </div>
        <div className="flex gap-4 md:gap-6 justify-center flex-wrap">
          <a href="#" className="flex items-center gap-2.5 bg-white/10 border border-white/20 text-white py-2.5 px-6 rounded-full text-sm font-bold transition-all duration-300 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-1"><MessageCircle size={18} /> WhatsApp</a>
          <a href="mailto:hello@deetyaenterprise.com" className="flex items-center gap-2.5 bg-white/10 border border-white/20 text-white py-2.5 px-6 rounded-full text-sm font-bold transition-all duration-300 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-1"><Mail size={18} /> Email</a>
          <a href="#" className="flex items-center gap-2.5 bg-white/10 border border-white/20 text-white py-2.5 px-6 rounded-full text-sm font-bold transition-all duration-300 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-1"><ExternalLink size={18} /> LinkedIn</a>
          <a href="#" className="flex items-center gap-2.5 bg-white/10 border border-white/20 text-white py-2.5 px-6 rounded-full text-sm font-bold transition-all duration-300 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-1"><Phone size={18} /> Call</a>
        </div>
      </div>
    </section>
  );
}
