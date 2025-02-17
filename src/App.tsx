import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <meta name="google-site-verification" content="T05ZslJ0bhSKM110Rx75UWwZd05KkH38_jVvHG2xalc" />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}