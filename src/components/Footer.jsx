import React from 'react';

const Footer = () => (
  <footer className="border-t border-zinc-900/60 bg-zinc-950/10 py-8 text-center text-zinc-500 text-sm">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>&copy; {new Date().getFullYear()} Poly Etilen. All rights reserved.</p>
      <p className="text-xs text-zinc-600">
        Inspired by soumyajit4419/Portfolio &bull; Built with React & Tailwind CSS
      </p>
    </div>
  </footer>
);

export default Footer;