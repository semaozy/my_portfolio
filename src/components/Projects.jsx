import React from 'react';

const projects = [
  {
    title: "Viranora: Brutally Honest PM",
    category: "Full Stack AI Product",
    description: "Sıradan to-do listelerine bir başkaldırı. Groq Cloud (Llama 3.3) altyapısı ile görev listenizi analiz eder, tembelliğinizi yüzünüze vurur ve sizi 'imha' tehdidiyle çalışmaya zorlar.",
    tech: ["FastAPI", "React", "Llama 3", "SQLite"],
    link: "https://github.com/viranora/Viranora-The-Brutally-Honest-AI-Project-Manager", // Proje özel linkin varsa değiştir
    featured: true // Bu projeyi öne çıkarmak için
  },
  {
    title: "Local RAG PDF Assistant",
    category: "GenAI & NLP",
    description: "Gizlilik odaklı, yerel çalışan RAG sistemi. PDF dokümanlarınızla sohbet etmenizi sağlar. OpenAI maliyeti olmadan, Zephyr-7b modeli ile güvenli ve ücretsiz analiz.",
    tech: ["Python", "LangChain", "FAISS", "Hugging Face"],
    link: "https://github.com/viranora/pdf-rag-chatbot"
  },
  {
    title: "SimpleTaskFlow",
    category: "Frontend Architecture",
    description: "Notion-tarzı minimalist Kanban panosu. Zustand ile kalıcı state yönetimi ve dnd-kit ile pürüzsüz sürükle-bırak deneyimi. UX odaklı modern mimari.",
    tech: ["React 19", "Tailwind CSS", "Zustand", "Vite"],
    link: "https://github.com/viranora/SimpleTaskFlow"
  },
  {
    title: "Credit Card Fraud Detection",
    category: "Data Science",
    description: "Dengesiz veri setlerinde (Imbalanced Data) %0.17'lik fraud oranını yakalayan model. Accuracy tuzağına düşmeden, Precision/Recall dengesi ve SMOTE ile gerçekçi risk analizi.",
    tech: ["Scikit-Learn", "SMOTE", "Random Forest", "Pandas"],
    link: "https://github.com/viranora/CreditCardFraudDetection" // Veya Kaggle linkin
  },
  {
    title: "AI Mood Tracker",
    category: "Mobile Application",
    description: "React Native ve TypeScript ile geliştirilen duygu analiz asistanı. Günlük girdilerinizi Hugging Face API ile analiz eder, offline modda çalışabilir ve psikolojik öneriler sunar.",
    tech: ["React Native", "TypeScript", "Context API", "HF API"],
    link: "https://github.com/viranora/moodTrackerAI"
  },
  {
    title: "Causal Impact Analysis",
    category: "Data Analytics",
    description: "Pazarlama müdahalelerinin (Twitter tanıtımları) site trafiğine etkisini ölçen istatistiksel analiz. Counterfactual modelleme ile 'tanıtım olmasaydı ne olurdu?' sorusunun cevabı.",
    tech: ["Python", "LinearRegression", "Matplotlib", "NumPy"],
    link: "https://github.com/viranora/impactAnalysis"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="border-b-4 border-tech-accent pb-2">Seçilmiş Çalışmalar</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-tech-accent transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs font-mono uppercase tracking-wider px-2 py-1 rounded text-tech-accent bg-tech-accent/10">
                  {project.category}
                </div>
                {/* Link İkonu */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>

              <h3 className="text-xl font-bold mb-3 transition-colors group-hover:text-tech-accent">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-900 text-[10px] md:text-xs rounded text-gray-300 border border-slate-700">
                    {t}
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

export default Projects;