import Hero from '@/components/hero';
import About from '@/components/about';
import Location from '@/components/location';
import Contact from '@/components/contact';
import Gallery from '@/components/gallery';
export default function Home() {
   return (
      <main>
         <Hero />
         <About />
         <Location />
         <Contact />
         <Gallery />
      </main>
   );
}
