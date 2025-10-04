import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import LocationHours from '@/components/LocationHours';
import ContactSection from '@/components/ContactSection';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <MenuSection />
      <Gallery />
      <Testimonials />
      <LocationHours />
      <ContactSection />
    </>
  );
}
