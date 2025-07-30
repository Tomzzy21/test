import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const TYPING_TEXT = "With over two decades of transformative experience with the Lagos State Government, I specialize in building robust educational frameworks from the ground up.";

const Hero: React.FC = () => {
  const [typed, setTyped] = useState('');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView && typed.length < TYPING_TEXT.length) {
      const timeout = setTimeout(() => {
        setTyped(TYPING_TEXT.slice(0, typed.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [inView, typed]);

  return (
    <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-fade-in-up order-2 lg:order-1" data-aos="fade-up">
          <div className="flex items-center justify-center lg:justify-start space-x-1 text-brand-accent mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            ))}
            <span className="text-brand-muted ml-2 text-sm">Rated 5/5 | Based on 20+ years of impact</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Empowering Students.
            <span className="block text-brand-accent">Shaping Education Policy.</span>
          </h1>
          <p ref={ref} className="max-w-xl mx-auto lg:mx-0 text-brand-muted text-lg md:text-xl mb-8 min-h-[4.5rem]">
            {typed}
            <span className="inline-block w-2 h-6 align-middle bg-brand-accent animate-pulse ml-1" style={{visibility: typed.length < TYPING_TEXT.length ? 'visible' : 'hidden'}}></span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#contact" className="w-full sm:w-auto bg-brand-accent text-brand-primary font-bold py-3 px-8 rounded-lg hover:bg-amber-400 transition-all text-center">
              Book a Consultation
            </a>
            <a href="#resume" className="w-full sm:w-auto bg-brand-secondary text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-700 transition-all text-center">
              View My Legacy
            </a>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in-up order-1 lg:order-2" style={{animationDelay: '0.2s'}} data-aos="zoom-in">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-2 bg-gradient-to-br from-brand-accent to-amber-600 rounded-lg blur opacity-25"></div>
            <div className="relative bg-brand-secondary rounded-lg overflow-hidden p-2" style={{ height: '500px', minHeight: '500px', maxHeight: '500px' }}>
              <img 
                src="/PHOTO-2025-07-05-18-37-11 (2).jpg"
                alt="Ayodeji Olayinka Johnson" 
                className="rounded-lg w-full h-full object-cover"
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;