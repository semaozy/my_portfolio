import React from 'react';

const skillCategories = [
  {
    title: "Yapay Zeka & Veri Bilimi",
    items: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Keras", "Matplotlib"],
  },
  {
    title: "Programlama & Veritabanı",
    items: ["JavaScript", "SQL", "R", "MySQL"],
  },
  {
    title: "Web & Mobil Geliştirme",
    items: ["React.js", "React Native", "Tailwind CSS"],
  },
  {
    title: "Uzmanlık Alanları",
    items: ["Makine Öğrenmesi", "Derin Öğrenme", "NLP (Duygu Analizi)", "Görüntü İşleme", "Veri Ön İşleme"],
  },
  {
    title: "Araçlar & Platformlar",
    items: ["Git", "GitHub", "Jupyter Notebook", "Kaggle", "VS Code", "Spyder"],
  },
  {
    title: "Yabancı Dil",
    items: ["Türkçe (Ana Dil)", "İngilizce (B2+)"],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-tech-dark border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="border-b-4 border-tech-accent pb-2">Teknik Yetkinlikler</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-xl border border-slate-700 bg-slate-900/50 
                         transition-all duration-300 
                         hover:border-tech-accent hover:shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-200 transition-colors group-hover:text-tech-accent">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs md:text-sm rounded-md font-medium border border-slate-700 bg-slate-800 text-gray-400 
                               transition-colors duration-300
                               group-hover:text-tech-accent group-hover:bg-tech-accent/10 group-hover:border-tech-accent/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;