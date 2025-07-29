import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-secondary border-t border-gray-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-brand-muted">
        <p>&copy; {currentYear} Ayodeji Olayinka Johnson. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
