export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-20 px-6 md:px-12 pb-0 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:inset-x-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-indigo-500/40 before:to-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 max-w-7xl mx-auto pb-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded bg-transparent flex items-center justify-center">
              <img src="/favicon.ico" alt="DeetyaEnterprise logo" width="24" height="24" className="rounded-sm" />
            </div>
            <span className="text-xl font-black bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">DeetyaEnterprise</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-gray-400">An AI-first software development agency building intelligent, scalable products for ambitious companies worldwide.</p>
        </div>
        <div>
          <h4 className="text-gray-200 text-sm font-extrabold mb-5 tracking-widest uppercase">Services</h4>
          <ul className="list-none flex flex-col gap-3">
            <li><a href="#services" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">AI Development</a></li>
            <li><a href="#services" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Web Development</a></li>
            <li><a href="#services" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Mobile Apps</a></li>
            <li><a href="#services" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Cloud &amp; DevOps</a></li>
            <li><a href="#services" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">UI/UX Design</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-200 text-sm font-extrabold mb-5 tracking-widest uppercase">Company</h4>
          <ul className="list-none flex flex-col gap-3">
            <li><a href="#work" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Case Studies</a></li>
            <li><a href="#process" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Process</a></li>
            <li><a href="#stack" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Tech Stack</a></li>
            <li><a href="#testimonials" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-200 text-sm font-extrabold mb-5 tracking-widest uppercase">Connect</h4>
          <ul className="list-none flex flex-col gap-3">
            <li><a href="mailto:hello@deetyaenterprise.com" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Email Us</a></li>
            <li><a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">LinkedIn</a></li>
            <li><a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">WhatsApp</a></li>
            <li><a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm font-medium">Book a Call</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm flex-wrap gap-4 text-gray-500">
        <span>© 2026 DeetyaEnterprise. All rights reserved.</span>
        <span>Built with <span className="text-pink-500 mx-1">❤️</span> + AI in India</span>
      </div>
    </footer>
  );
}
