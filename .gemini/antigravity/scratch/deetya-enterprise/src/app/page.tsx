import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedClients from '@/components/TrustedClients';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <Process />
      <TechStack />
      <Industries />
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  );
}
