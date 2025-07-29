import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Consulting Services</h2>
          <p className="text-lg text-brand-muted mt-4 max-w-2xl mx-auto">
            Leveraging decades of experience to provide expert guidance in all areas of education.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service: Service, index: number) => (
            <div
              key={service.title}
              className="bg-brand-secondary p-8 rounded-xl border border-gray-700/50 hover:border-brand-accent/50 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-brand-muted">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
