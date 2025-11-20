import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedDishes } from './components/FeaturedDishes';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedDishes />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;