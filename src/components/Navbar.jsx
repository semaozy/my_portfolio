import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-tech-dark/90 backdrop-blur-sm border-b border-slate-800 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo - Sayfanın en tepesine atar */}
        <a href="#" className="text-xl font-bold tracking-tighter text-tech-accent hover:text-white transition cursor-pointer">
          VİRA
        </a>

        {/* Desktop Menu */}
        <div className="space-x-8 text-sm font-medium text-gray-400 hidden md:block">
          <a href="#skills" className="hover:text-white transition hover:text-tech-accent">Yetenekler</a>
          <a href="#projects" className="hover:text-white transition hover:text-tech-accent">Projeler</a>
          <a href="#experience" className="hover:text-white transition hover:text-tech-accent">Deneyim</a>
          <a href="#contact" className="hover:text-white transition hover:text-tech-accent">İletişim</a>
        </div>
        
        {/* Mobil menü ikonu buraya gelebilir ileride */}
      </div>
    </nav>
  );
};

export default Navbar;