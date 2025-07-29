import React from 'react';

const Quote: React.FC = () => {
  return (
    <section className="bg-brand-secondary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-medium text-white italic">
            “Education is the foundation of every thriving society – I’m committed to building it, one student and one policy at a time.”
          </p>
          <footer className="mt-6 text-xl font-bold text-brand-accent">
            - Ayodeji O. Johnson
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
