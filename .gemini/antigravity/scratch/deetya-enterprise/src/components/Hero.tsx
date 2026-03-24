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
        <div className="absolute -top-[20%] -left-[10%] w-[max(120vw,1200px)] h-[max(120vw,1200px)] bg-[radial-gradient(ellipse,rgba(99,102,241,0.14)_0%,transparent_65%)] animate-drift1" />
        <div className="absolute inset-x-0 bottom-[20%] -right-[10%] w-[max(100vw,1000px)] h-[max(100vw,1000px)] bg-[radial-gradient(ellipse,rgba(139,92,246,0.12)_0%,transparent_65%)] animate-drift2" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(99,102,241,0.1)_1px,transparent_1px)] bg-size-[36px_36px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />
      </div>
      
      {/* Neural network — full-section background animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-30" aria-hidden="true">
        <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[min(700px,95vw)] h-[min(700px,95vh)] animate-float drop-shadow-[0_0_60px_rgba(99,102,241,0.18)]">
          <circle cx="230" cy="230" r="200" fill="url(#bgGlow)" opacity="0.18"/>
          <g className="animate-orbit1 origin-[230px_230px]">
            <ellipse cx="230" cy="230" rx="195" ry="80" stroke="url(#gA)" strokeWidth="1.5" strokeDasharray="8 5" opacity="0.5"/>
            <circle cx="425" cy="230" r="10" fill="#6366f1"/>
            <circle cx="35" cy="230" r="10" fill="#8b5cf6"/>
            <text x="428" y="218" fill="#6366f1" fontSize="11" fontFamily="Outfit,sans-serif" fontWeight="700">Cloud</text>
            <text x="10" y="218" fill="#8b5cf6" fontSize="11" fontFamily="Outfit,sans-serif" fontWeight="700">ML</text>
          </g>
          <g className="animate-orbit2 origin-[230px_230px]">
            <ellipse cx="230" cy="230" rx="130" ry="55" stroke="url(#gB)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6"/>
            <circle cx="360" cy="230" r="8" fill="#a78bfa"/>
            <circle cx="100" cy="230" r="8" fill="#6366f1"/>
            <text x="363" y="222" fill="#a78bfa" fontSize="10" fontFamily="Outfit,sans-serif" fontWeight="700">AI</text>
            <text x="80" y="222" fill="#6366f1" fontSize="10" fontFamily="Outfit,sans-serif" fontWeight="700">Web</text>
          </g>
          <circle cx="230" cy="230" r="52" fill="url(#hubG)"/>
          <circle cx="230" cy="230" r="42" fill="white" opacity="0.15"/>
          <text x="230" y="222" textAnchor="middle" fill="white" fontSize="11" fontFamily="Outfit,sans-serif" fontWeight="700">DeetyaEnt</text>
          <text x="230" y="240" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="9" fontFamily="Outfit,sans-serif">AI-First</text>
          <line x1="230" y1="178" x2="230" y2="140" stroke="url(#gA)" strokeWidth="1.5" opacity="0.5"/>
          <line x1="230" y1="282" x2="230" y2="320" stroke="url(#gB)" strokeWidth="1.5" opacity="0.5"/>
          <line x1="178" y1="230" x2="140" y2="230" stroke="url(#gA)" strokeWidth="1.5" opacity="0.5"/>
          <line x1="282" y1="230" x2="320" y2="230" stroke="url(#gB)" strokeWidth="1.5" opacity="0.5"/>
          <circle cx="230" cy="128" r="26" fill="url(#gA)" opacity="0.9"/>
          <text x="230" y="133" textAnchor="middle" fill="white" fontSize="9.5" fontFamily="Outfit,sans-serif" fontWeight="700">Mobile</text>
          <circle cx="230" cy="332" r="26" fill="url(#gB)" opacity="0.9"/>
          <text x="230" y="337" textAnchor="middle" fill="white" fontSize="9.5" fontFamily="Outfit,sans-serif" fontWeight="700">DevOps</text>
          <circle cx="128" cy="230" r="24" fill="url(#gC)" opacity="0.9"/>
          <text x="128" y="235" textAnchor="middle" fill="white" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="700">Web</text>
          <circle cx="332" cy="230" r="24" fill="url(#gA)" opacity="0.9"/>
          <text x="332" y="235" textAnchor="middle" fill="white" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="700">AI</text>
          <circle cx="182" cy="182" r="7" fill="#a78bfa" opacity="0.6"/>
          <circle cx="278" cy="182" r="7" fill="#6366f1" opacity="0.6"/>
          <circle cx="182" cy="278" r="7" fill="#8b5cf6" opacity="0.6"/>
          <circle cx="278" cy="278" r="7" fill="#a78bfa" opacity="0.6"/>
          <defs>
            <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="gA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
            <linearGradient id="gB" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#a78bfa"/>
            </linearGradient>
            <linearGradient id="gC" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#a78bfa"/>
            </linearGradient>
            <linearGradient id="hubG" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content — centered over the SVG */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center opacity-100" ref={ref}>
        <div className="inline-flex items-center gap-2 border border-indigo-200/50 text-indigo-700 py-2 px-6 rounded-full text-xs md:text-sm font-bold mb-8 tracking-wider uppercase shadow-xl shadow-indigo-500/10 backdrop-blur-md bg-white/60">
          🚀 AI-First Development Agency
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 tracking-tighter drop-shadow-sm">
          We Build <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Intelligent Software</span> That Scales.
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 font-medium max-w-2xl mx-auto">
          DeetyaEnterprise creates AI-powered web and mobile products — from MVP to enterprise.
          We don&apos;t just write code, we engineer competitive advantages.
        </p>
        <div className="flex gap-4 md:gap-6 flex-col md:flex-row items-center justify-center mb-16 w-full md:w-auto">
          <a href="#cta" className="w-full md:w-auto flex items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform duration-300 shadow-xl shadow-indigo-500/30 hover:-translate-y-1 hover:shadow-indigo-500/50">
            Start Your Project →
          </a>
          <a href="#work" className="w-full md:w-auto flex items-center justify-center bg-white/80 border-2 border-indigo-100 text-indigo-700 px-8 py-4 rounded-full font-bold text-lg backdrop-blur-md transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-300 hover:-translate-y-1">
            See Our Work
          </a>
        </div>
        
        <div className="flex flex-row gap-0 bg-white/80 border border-indigo-100 rounded-3xl py-6 px-6 md:px-10 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 w-full max-w-3xl justify-between items-center isolate">
          <div className="text-center px-2 md:px-8 flex-1">
            <span className="block text-3xl md:text-4xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">120+</span>
            <span className="text-xs md:text-sm text-gray-500 font-bold tracking-wider mt-1 uppercase">Projects</span>
          </div>
          <div className="text-center px-2 md:px-8 flex-1 border-l border-indigo-100">
            <span className="block text-3xl md:text-4xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">98%</span>
            <span className="text-xs md:text-sm text-gray-500 font-bold tracking-wider mt-1 uppercase">Retention</span>
          </div>
          <div className="text-center px-2 md:px-8 flex-1 border-l border-indigo-100">
            <span className="block text-3xl md:text-4xl font-black bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">4.9★</span>
            <span className="text-xs md:text-sm text-gray-500 font-bold tracking-wider mt-1 uppercase">Clutch</span>
          </div>
        </div>
      </div>
    </section>
    <TrustedClients />
    </>
  );
}
