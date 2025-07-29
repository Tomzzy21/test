import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-brand-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">What Colleagues Say</h2>
          <p className="text-lg text-brand-muted mt-4 max-w-2xl mx-auto">
            Endorsements from professionals who have witnessed my dedication and impact firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
            <div
              key={index}
              className="bg-brand-primary p-6 rounded-lg border border-gray-700/80 transform hover:rotate-[-2deg] hover:scale-105 transition-transform duration-300"
            >
              <blockquote className="flex flex-col h-full">
                <p className="text-brand-light flex-grow">"{testimonial.quote}"</p>
                <footer className="mt-4 pt-4 border-t border-gray-700">
                  <p className="font-bold text-brand-accent">{testimonial.name}</p>
                  <p className="text-sm text-brand-muted">{testimonial.title}</p>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
