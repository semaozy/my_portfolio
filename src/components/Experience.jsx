import React from 'react';

const experiences = [
  {
    company: "AkademiQ.Ai",
    role: "Proje Yönetimi Stajyeri",
    period: "2026 – Devam",
    type: "Yönetim", 
    description: [
      "Eğitim programlarının ve etkinliklerin uçtan uca koordinasyonu.",
      "Operasyonel süreçlerin takibi ve proje yönetim araçları ile verimlilik analizi."
    ]
  },
  {
    company: "Yapay Zeka ve Teknoloji Akademisi",
    role: "Yapay Zeka Bursiyeri",
    period: "2025 – Devam",
    type: "Teknik",
    description: [
      "31.000+ başvuru arasından seçilen %1'lik dilimde yer alma başarısı.",
      "Deep Learning ve NLP modelleri üzerine ileri seviye teknik yetkinlik kazanımı ve sektörel proje geliştirme."
    ]
  },
  {
    company: "Masqot.co",
    role: "Business Development & Events",
    period: "2025 – Devam",
    type: "Business",
    description: [
      "Start-up büyüme hedefleri doğrultusunda pazar araştırması ve rakip analizi yönetimi.",
      "Marka bilinirliğini artırmak adına B2B görüşmeler ve stratejik etkinlik planlamaları."
    ]
  },
  {
    company: "Deneyap Türkiye",
    role: "Eğitmen Mentor",
    period: "2025 – Devam",
    type: "Eğitim",
    description: [
      "Öğrencilere Robotik Kodlama ve Yazılım eğitimi verilmesi.",
      "Teknik proje süreçlerine mentörlük ve takım liderliği."
    ]
  },
  {
    company: "Genesis Network",
    role: "Eğitmen",
    period: "2025",
    type: "Eğitim",
    description: [
      "AI Destekli Kodlama (AI-Assisted Coding) ve hızlı prototipleme araçları üzerine modern yazılım eğitimleri."
    ]
  },
  {
    company: "T3 Vakfı (TEKNOFEST & Take Off)",
    role: "Operasyon Ekip Üyesi",
    period: "2025",
    type: "Operasyon",
    description: [
      "Girişimcilik merkezi ve uluslararası zirve organizasyonlarında operasyonel süreç yönetimi.",
      "Saha ekip koordinasyonu ve kriz yönetimi."
    ]
  },
  {
    company: "TNC Group",
    role: "Bilgi Teknolojileri Stajyeri",
    period: "2025",
    type: "Teknik",
    description: [
      "Canlı sistemlerin test ve hata ayıklama (debugging) süreçlerine katılım.",
      "Teknik dokümantasyon oluşturulması ve sistem takibi."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-tech-dark relative overflow-hidden">
      {/* Arkaplan dekoru */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tech-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="border-b-4 border-pm-accent pb-2">Profesyonel Yolculuk</span>
        </h2>
        
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Noktası */}
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-tech-dark transition-colors duration-300 bg-slate-600 group-hover:bg-tech-accent"></span>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-tech-accent transition-colors">
                  {exp.company}
                </h3>
                <span className="text-xs font-mono text-gray-500 bg-slate-900 px-2 py-1 rounded border border-slate-800 mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg font-medium text-gray-300 mb-3">
                {exp.role}
              </h4>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start">
                    <span className="mr-2 text-slate-600 mt-1">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
