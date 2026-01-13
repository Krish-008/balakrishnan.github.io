import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import UnfilteredMe from '@/components/UnfilteredMe';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <UnfilteredMe />
      <Contact />
    </main>
  );
}
