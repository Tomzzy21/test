import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Services from './components/Services';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className="bg-brand-primary text-brand-light font-sans overflow-x-hidden">
      <div 
        className="fixed top-0 left-0 w-full h-full z-0" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="relative z-10">
        <Header />
        <main>
          <div data-aos="fade-up"><Hero /></div>
          <div data-aos="fade-up" data-aos-delay="100"><Quote /></div>
          <div data-aos="fade-up" data-aos-delay="200"><Services /></div>
          <div data-aos="fade-up" data-aos-delay="300"><Resume /></div>
          <div data-aos="fade-up" data-aos-delay="400"><Skills /></div>
          <div data-aos="fade-up" data-aos-delay="500"><Testimonials /></div>
          <div data-aos="fade-up" data-aos-delay="600"><Contact /></div>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default App;
