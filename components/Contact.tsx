import React, { useState } from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE, CALENDLY_LINK } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}. Your message has been received (simulation).`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Let's Collaborate</h2>
          <p className="text-lg text-brand-muted mt-4 max-w-2xl mx-auto">
            Ready to enhance your educational institution or discuss a project? Reach out.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-brand-secondary p-8 rounded-lg border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full bg-brand-primary border border-gray-600 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-brand-accent focus:outline-none transition" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full bg-brand-primary border border-gray-600 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-brand-accent focus:outline-none transition" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full bg-brand-primary border border-gray-600 rounded-lg py-3 px-4 text-white focus:ring-2 focus:ring-brand-accent focus:outline-none transition"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-brand-accent text-brand-primary font-bold py-3 px-8 rounded-lg hover:bg-amber-400 transition-all">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-brand-secondary p-8 rounded-lg border border-gray-700/50 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Book a Session</h3>
                <p className="text-brand-muted mb-6">Schedule a dedicated time to discuss your needs in detail.</p>
                <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-accent text-brand-primary font-bold py-3 px-8 rounded-lg hover:bg-amber-400 transition-all">
                    Open Calendly
                </a>
            </div>
            <div className="bg-brand-secondary p-8 rounded-lg border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">Direct Contact</h3>
              <p className="text-brand-muted">Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-accent hover:underline">{CONTACT_EMAIL}</a></p>
              <p className="text-brand-muted">Phone: <a href={`tel:${CONTACT_PHONE}`} className="text-brand-accent hover:underline">{CONTACT_PHONE}</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
