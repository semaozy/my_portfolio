import React from 'react';
import Navbar from './components/Navbar'; // Navbar eklendi
import Hero from './components/Hero';
import Skills from './components/Skills'; // Skills eklendi (UNUTMA!)
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-tech-dark min-h-screen text-white antialiased selection:bg-tech-accent selection:text-tech-dark">
      
      {/* Navbar Bileşeni */}
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Sema Özyılmaz. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;