'use client';
import { useState, useEffect, useRef } from 'react';
import { Quote, User, Globe, Phone, Mail, Building, Paperclip } from 'lucide-react';

import { testimonials } from '../utils/constants';

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible')); });
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const goTo = (i: number) => {
    setVisible(false);
    setTimeout(() => { setCur(i); setVisible(true); }, 250);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => { setVisible(false); setTimeout(() => { setCur(c => (c + 1) % testimonials.length); setVisible(true); }, 250); }, 4000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setCur(c => (c + 1) % testimonials.length); setVisible(true); }, 250);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const t = testimonials[cur];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 bg-indigo-50/40 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.05),transparent_40%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6 mb-20 md:mb-24 fade-up text-center">
          <span className="block mx-auto w-fit border border-indigo-200/50 text-indigo-700 py-2 px-6 rounded-full text-xs font-bold tracking-widest uppercase shadow-md shadow-indigo-500/5 bg-white/80">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight max-w-4xl">
            What Our Clients <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Say About Us</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Testimonials */}
          <div className="space-y-8">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="bg-white rounded-[2rem] p-10 md:p-14 shadow-[0_20px_50px_rgba(99,102,241,0.05)] border border-indigo-50 relative transition-all duration-500 hover:shadow-[0_30px_60px_rgba(99,102,241,0.1)] fade-up" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(15px)', transition: 'all .4s ease-out' }}>
                <Quote size={48} className="text-indigo-100 mb-8" />
                <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-medium mb-10 italic tracking-tight">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-6 border-t border-indigo-50 pt-8 mt-4">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-black text-white text-xl shrink-0 shadow-xl shadow-indigo-500/30">{t.initials}</div>
                  <div>
                    <div className="font-black text-xl text-gray-900 tracking-tight">{t.name}</div>
                    <div className="text-sm text-indigo-600 font-bold mt-1 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 justify-center lg:justify-start mt-10">
                {testimonials.map((_, i) => (
                  <button key={i} className={`w-3 h-3 rounded-full bg-indigo-200 cursor-pointer transition-all duration-500 border-none ${i === cur ? 'bg-indigo-600! w-10!' : 'hover:bg-indigo-400'}`} onClick={() => goTo(i)} aria-label={`Testimonial ${i + 1}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="fade-up d2">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_30px_70px_rgba(99,102,241,0.12)] border border-indigo-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50/50 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-gray-900 tracking-tighter">Let&apos;s Talk About Your Project</h3>
              <p className="text-gray-500 text-lg mb-10 font-medium leading-relaxed">No sales pitch. Just a clear roadmap for your business growth.</p>
              
              <form className="flex flex-col gap-6" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex items-center gap-4 bg-gray-50/80 border border-indigo-50 rounded-2xl px-5 py-4 transition-all duration-300 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/5 group">
                    <User className="text-gray-400 transition-colors group-focus-within:text-indigo-600 shrink-0" size={20} />
                    <input type="text" placeholder="Your Name" required className="w-full bg-transparent border-none outline-none font-bold text-gray-900 placeholder:text-gray-400 focus:ring-0 p-0 text-base" />
                  </div>
                  {/* Country Input */}
                  <div className="flex items-center gap-4 bg-gray-50/80 border border-indigo-50 rounded-2xl px-5 py-4 transition-all duration-300 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/5 group">
                    <Globe className="text-gray-400 transition-colors group-focus-within:text-indigo-600 shrink-0" size={20} />
                    <input type="text" placeholder="Country" required className="w-full bg-transparent border-none outline-none font-bold text-gray-900 placeholder:text-gray-400 focus:ring-0 p-0 text-base" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="flex items-center gap-4 bg-gray-50/80 border border-indigo-50 rounded-2xl px-5 py-4 transition-all duration-300 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/5 group">
                    <Phone className="text-gray-400 transition-colors group-focus-within:text-indigo-600 shrink-0" size={20} />
                    <input type="text" placeholder="Phone Number" required className="w-full bg-transparent border-none outline-none font-bold text-gray-900 placeholder:text-gray-400 focus:ring-0 p-0 text-base" />
                  </div>
                  {/* Email Input */}
                  <div className="flex items-center gap-4 bg-gray-50/80 border border-indigo-50 rounded-2xl px-5 py-4 transition-all duration-300 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/5 group">
                    <Mail className="text-gray-400 transition-colors group-focus-within:text-indigo-600 shrink-0" size={20} />
                    <input type="email" placeholder="Email Id" required className="w-full bg-transparent border-none outline-none font-bold text-gray-900 placeholder:text-gray-400 focus:ring-0 p-0 text-base" />
                  </div>
                </div>

                {/* Company Input */}
                <div className="flex items-center gap-4 bg-gray-50/80 border border-indigo-50 rounded-2xl px-5 py-4 transition-all duration-300 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/5 group">
                  <Building className="text-gray-400 transition-colors group-focus-within:text-indigo-600 shrink-0" size={20} />
                  <input type="text" placeholder="Company Name" required className="w-full bg-transparent border-none outline-none font-bold text-gray-900 placeholder:text-gray-400 focus:ring-0 p-0 text-base" />
                </div>

                {/* Requirements Textarea */}
                <div className="bg-gray-50/80 border border-indigo-50 rounded-2xl px-5 py-5 transition-all duration-300 focus-within:bg-white focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-500/5">
                  <textarea placeholder="Tell us about your requirements..." required rows={4} className="w-full bg-transparent border-none outline-none font-bold text-gray-900 placeholder:text-gray-400 focus:ring-0 p-0 text-base resize-none" />
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-4">
                  <div className="flex items-center gap-4">
                    <label htmlFor="file-upload" className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-indigo-50 text-indigo-700 text-sm font-black cursor-pointer transition-all duration-300 border border-indigo-100 hover:bg-indigo-100 hover:scale-105 active:scale-95">
                      <Paperclip size={18} /> Attach Files
                    </label>
                    <input id="file-upload" type="file" className="hidden" />
                    <span className="text-xs font-semibold text-gray-400">Max size: 10MB</span>
                  </div>
                  <button type="submit" className="bg-linear-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-indigo-500/30 w-full sm:w-auto">
                    Send Message →
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
