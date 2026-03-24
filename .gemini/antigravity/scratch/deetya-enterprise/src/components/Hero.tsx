'use client';
import { useEffect, useRef } from 'react';
import TrustedClients from './TrustedClients';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el) setTimeout(() => el.classList.add('visible'), 120);
  }, []);

  return (
    <>
      <section className="min-h-[95vh] flex items-center justify-center pt-40 pb-28 px-6 md:px-12 lg:px-24 relative overflow-hidden text-center" id="hero">
      {/* Aurora glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[120vw] h-[120vw] bg-[radial-gradient(ellipse,rgba(99,102,241,0.14)_0%,transparent_65%)] animate-drift1" />
        <div className="absolute inset-x-0 bottom-[20%] -right-[10%] w-[100vw] h-[100vw] bg-[radial-gradient(ellipse,rgba(139,92,246,0.12)_0%,transparent_65%)] animate-drift2" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[length:36px_36px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />
      </div>
      
      {/* Neural network animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-30" aria-hidden="true">
        <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[min(700px,95vw)] h-[min(700px,95vh)] animate-float drop-shadow-[0_0_60px_rgba(99,102,241,0.18)]">
          <circle cx="230" cy="230" r="200" fill="url(#bgGlow)" opacity="0.18"/>
          <g className="origin-[230px_230px] animate-orbit1">
            <ellipse cx="230" cy="230" rx="195" ry="80" stroke="url(#gA)" strokeWidth="1.5" strokeDasharray="8 5" opacity="0.5"/>
            <circle cx="425" cy="230" r="10" fill="#6366f1"/>
            <circle cx="35" cy="230" r="10" fill="#8b5cf6"/>
          </g>
          <g className="origin-[230px_230px] animate-orbit2">
            <ellipse cx="230" cy="230" rx="130" ry="55" stroke="url(#gB)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6"/>
            <circle cx="360" cy="230" r="8" fill="#a78bfa"/>
            <circle cx="100" cy="230" r="8" fill="#6366f1"/>
          </g>
          <circle cx="230" cy="230" r="52" fill="url(#hubG)"/>
          <text x="230" y="222" textAnchor="middle" fill="white" fontSize="11" fontFamily="Outfit,sans-serif" fontWeight="700">DeetyaEnt</text>
          <text x="230" y="240" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9" fontFamily="Outfit,sans-serif">AI-First</text>
          <defs>
            <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="gA" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient>
            <linearGradient id="gB" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient>
            <linearGradient id="hubG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center opacity-100 transition-all duration-1000" ref={ref}>
        <div className="inline-flex items-center gap-2 border border-indigo-200/50 text-indigo-700 py-2.5 px-7 rounded-full text-xs md:text-sm font-black mb-10 tracking-widest uppercase shadow-2xl shadow-indigo-500/10 backdrop-blur-md bg-white/70">
          🚀 AI-First Development Agency
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-10 tracking-tighter">
          We Build <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Intelligent Software</span> That Scales.
        </h1>
        <p className="text-gray-600 text-lg md:text-2xl leading-relaxed mb-16 font-medium max-w-3xl mx-auto">
          DeetyaEnterprise creates AI-powered web and mobile products — from MVP to enterprise.
          We don&apos;t just write code, we engineer competitive advantages.
        </p>
        <div className="flex gap-4 md:gap-8 flex-col md:flex-row items-center justify-center mb-20 w-full md:w-auto">
          <a href="#cta" className="w-full md:w-auto flex items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-full font-black text-xl transition-all duration-300 shadow-2xl shadow-indigo-500/40 hover:-translate-y-1 hover:scale-105 active:scale-95">
            Start Your Project →
          </a>
          <a href="#work" className="w-full md:w-auto flex items-center justify-center bg-white/80 border-2 border-indigo-100 text-indigo-700 px-10 py-5 rounded-full font-black text-xl backdrop-blur-md transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-300 hover:-translate-y-1 active:scale-95">
            See Our Work
          </a>
        </div>
        
        <div className="flex flex-row gap-0 bg-white/80 border border-indigo-100 rounded-4xl py-8 px-8 md:px-14 backdrop-blur-xl shadow-[0_30px_70px_rgba(99,102,241,0.15)] w-full max-w-4xl justify-between items-center isolate transition-all duration-500 hover:shadow-[0_40px_80px_rgba(99,102,241,0.2)]">
          <div className="text-center px-4 md:px-10 flex-1">
            <span className="block text-3xl md:text-5xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tighter">120+</span>
            <span className="text-[10px] md:text-xs text-gray-400 font-black tracking-widest mt-2 uppercase">Projects</span>
          </div>
          <div className="text-center px-4 md:px-10 flex-1 border-l border-indigo-100">
            <span className="block text-3xl md:text-5xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tighter">98%</span>
            <span className="text-[10px] md:text-xs text-gray-400 font-black tracking-widest mt-2 uppercase">Retention</span>
          </div>
          <div className="text-center px-4 md:px-10 flex-1 border-l border-indigo-100">
            <span className="block text-3xl md:text-5xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tighter">4.9★</span>
            <span className="text-[10px] md:text-xs text-gray-400 font-black tracking-widest mt-2 uppercase">Clutch</span>
          </div>
        </div>
      </div>
    </section>
    <TrustedClients />
    </>
  );
}
