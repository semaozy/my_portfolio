const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-tech-accent font-mono text-lg mb-4">Merhaba, ben</h2>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Sema Özyılmaz
      </h1>
      <p className="text-gray-400 max-w-2xl text-lg md:text-xl leading-relaxed">
        Veri bilimi ile gerçeği analiz ediyor, proje yönetimi ile geleceği inşa ediyorum.
        <br />
        <span className="text-white font-semibold">Computer Engineering Student</span>
      </p>
      
      <div className="mt-8 flex gap-4">
        {/* Button yerine <a> etiketi kullandık ve href ile hedef gösterdik */}
        <a 
          href="#projects" 
          className="px-6 py-3 border border-tech-accent text-tech-accent hover:bg-tech-accent hover:text-tech-dark transition duration-300 rounded font-medium"
        >
          Projelerimi Gör
        </a>
        
        <a 
          href="#contact" 
          className="px-6 py-3 bg-white text-tech-dark hover:bg-gray-200 transition duration-300 rounded font-medium"
        >
          İletişime Geç
        </a>
      </div>
    </section>
  );
};

export default Hero;