import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Bir Sonraki Adım?</h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
        İster bir yapay zeka projesi, ister proje yönetimi süreçleri olsun; 
        katma değer yaratmaya hazırım.
      </p>
      
      <div className="flex justify-center gap-6">
        <a href="mailto:ssozylmz@gmail.com" className="px-8 py-3 bg-tech-accent text-tech-dark font-bold rounded hover:bg-white transition duration-300">
          E-posta Gönder
        </a>
        <a href="https://www.linkedin.com/in/semaa39/" target="_blank" rel="noreferrer" className="px-8 py-3 border border-gray-600 rounded hover:border-white hover:bg-white hover:text-tech-dark transition duration-300">
          LinkedIn
        </a>
      </div>
      
      <div className="mt-12 flex justify-center gap-8 text-gray-500 font-mono text-sm">
  <a 
    href="https://github.com/viranora" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-tech-accent transition duration-300 hover:-translate-y-1 inline-block"
  >
    Github
  </a>
  <a 
    href="https://www.kaggle.com/semaozyilmaz" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-tech-accent transition duration-300 hover:-translate-y-1 inline-block"
  >
    Kaggle
  </a>
  <a 
    href="https://medium.com/@viranora" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-tech-accent transition duration-300 hover:-translate-y-1 inline-block"
  >
    Medium
  </a>
</div>
    </section>
  );
};

export default Contact;