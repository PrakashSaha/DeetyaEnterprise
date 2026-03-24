'use client';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, MessageCircle } from 'lucide-react';
import { navLinks } from '../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-indigo-50 pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-2xl font-black tracking-tighter bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8 block no-underline">
              DeetyaEnterprise
            </a>
            <p className="text-gray-500 font-medium leading-relaxed mb-8 text-base">
              Pioneering the future of software through AI-first product engineering and design.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 shadow-sm"><MessageCircle size={20} /></a>
              <a href="#" className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 shadow-sm"><Mail size={20} /></a>
              <a href="#" className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 shadow-sm"><Globe size={20} /></a>
              <a href="#" className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 shadow-sm"><Share2 size={20} /></a>
              <a href="#" className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white hover:-translate-y-1 shadow-sm"><Info size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-gray-900 tracking-widest uppercase mb-8">Navigation</h4>
            <ul className="space-y-4 list-none p-0 m-0">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-500 font-bold hover:text-indigo-600 transition-colors no-underline text-base">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-gray-900 tracking-widest uppercase mb-8">Capabilities</h4>
            <ul className="space-y-4 list-none p-0 m-0">
              <li><a href="#" className="text-gray-500 font-bold hover:text-indigo-600 transition-colors no-underline text-base text-nowrap">AI & Machine Learning</a></li>
              <li><a href="#" className="text-gray-500 font-bold hover:text-indigo-600 transition-colors no-underline text-base text-nowrap">Full-Stack Development</a></li>
              <li><a href="#" className="text-gray-500 font-bold hover:text-indigo-600 transition-colors no-underline text-base text-nowrap">Cloud Architecture</a></li>
              <li><a href="#" className="text-gray-500 font-bold hover:text-indigo-600 transition-colors no-underline text-base text-nowrap">MVP Engineering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-gray-900 tracking-widest uppercase mb-8">Contact Us</h4>
            <ul className="space-y-6 list-none p-0 m-0">
              <li className="flex items-start gap-4">
                <Mail className="text-indigo-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-500 font-bold leading-relaxed text-base break-all">contact@deetya.enterprise</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-indigo-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-500 font-bold leading-relaxed text-base">+1 (555) 000-0000</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-indigo-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-500 font-bold leading-relaxed text-base">San Francisco, CA<br/>California, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-indigo-50 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-400 text-sm font-bold">© 2026 DeetyaEnterprise. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 text-sm font-bold hover:text-indigo-600 transition-colors no-underline">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm font-bold hover:text-indigo-600 transition-colors no-underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
