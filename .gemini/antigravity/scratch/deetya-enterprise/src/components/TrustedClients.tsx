
const BrandLogo = ({ name }: { name: string }) => {
  switch (name) {
    case 'Google':
      return <svg viewBox="0 0 90 30" width="90" height="30"><text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" letterSpacing="-1" fill="currentColor">Google</text></svg>;
    case 'Amazon':
      return <svg viewBox="0 0 95 30" width="95" height="30"><text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" letterSpacing="-1" fill="currentColor">amazon</text></svg>;
    case 'Microsoft':
      return <svg viewBox="0 0 120 30" width="120" height="30"><rect x="0" y="4" width="10" height="10" fill="currentColor"/><rect x="12" y="4" width="10" height="10" fill="currentColor"/><rect x="0" y="16" width="10" height="10" fill="currentColor"/><rect x="12" y="16" width="10" height="10" fill="currentColor"/><text x="28" y="22" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="20" fontWeight="600" fill="currentColor">Microsoft</text></svg>;
    case 'Stripe':
      return <svg viewBox="0 0 80 30" width="80" height="30"><text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" letterSpacing="-1.5" fill="currentColor">stripe</text></svg>;
    default:
      return (
        <svg viewBox="0 0 90 30" width="90" height="30">
          <text x="0" y="22" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" letterSpacing="-0.5" fill="currentColor">
            {name}
          </text>
        </svg>
      );
  }
};

const brands = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Netflix', 'Stripe', 'Spotify'];

export default function TrustedClients() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-indigo-500/5 overflow-hidden">
      <p className="text-center text-xs font-extrabold tracking-widest text-gray-400 mb-10 uppercase">TRUSTED BY ENGINEERING TEAMS AT</p>
      
      <div className="w-full overflow-hidden relative flex group before:content-[''] before:absolute before:top-0 before:w-1/4 md:before:w-1/6 before:h-full before:z-10 before:pointer-events-none before:left-0 before:bg-linear-to-r before:from-white before:to-transparent after:content-[''] after:absolute after:top-0 after:w-1/4 md:after:w-1/6 after:h-full after:z-10 after:pointer-events-none after:right-0 after:bg-linear-to-l after:from-white after:to-transparent">
        <div className="flex items-center gap-20 md:gap-32 px-10 md:px-20 w-max animate-scroll group-hover:[animation-play-state:paused]">
          {/* Double the array to create an infinite seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="text-gray-400 grayscale transition-all duration-300 h-8 flex items-center justify-center hover:text-gray-900 hover:grayscale-0">
              <BrandLogo name={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
