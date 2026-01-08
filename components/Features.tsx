
import React from 'react';
import { CloudRain, DollarSign, Leaf, Settings } from 'lucide-react';

const Features: React.FC = () => {
  const benefits = [
    {
      title: 'Economia Real',
      desc: 'Reduza drasticamente seu custo mensal com energia elétrica desde o primeiro mês de instalação.',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    },
    {
      title: 'Baixa Manutenção',
      desc: 'Nossos sistemas são robustos e exigem pouquíssima manutenção ao longo de sua vida útil.',
      icon: <Settings className="w-8 h-8" />,
      color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Sustentabilidade',
      desc: 'Utilize uma fonte renovável e ajude a diminuir a emissão de gases poluentes na atmosfera.',
      icon: <Leaf className="w-8 h-8" />,
      color: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
    },
    {
      title: 'Durabilidade Extrema',
      desc: 'Projetados para suportar intempéries e climas adversos sem perder a eficiência de geração.',
      icon: <CloudRain className="w-8 h-8" />,
      color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-widest">Benefícios</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Por que escolher a energia solar da EcoFlow?
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Muito além da economia, é um investimento no patrimônio e no futuro do meio ambiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                {benefit.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{benefit.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
