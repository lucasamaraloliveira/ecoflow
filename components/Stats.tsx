
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Projetos Concluídos', value: '1.2k+' },
    { label: 'Cidades Atendidas', value: '85' },
    { label: 'CO2 Evitado (Ton)', value: '12.4k' },
    { label: 'Anos de Experiência', value: '15' },
  ];

  return (
    <section className="bg-slate-900 dark:bg-slate-900/50 py-12 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl font-black text-yellow-400 mb-1">{stat.value}</p>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
