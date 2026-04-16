import { Content } from '../components/Content';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

export function HomePage() {
  return (
    <main className="shell">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </main>
  );
}
