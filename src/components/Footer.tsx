import React from 'react';

const Footer = () => {
  return (
    <footer className="p-12 border-t border-white/5 text-center">
      <p className="text-xs text-gray-600 font-medium uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} SALMA KHANDOKER - CRAFTING DIGITAL EXCELLENCE
      </p>
    </footer>
  );
};

export default Footer;
