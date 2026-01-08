
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const points = [
    'Estudo de viabilidade gratuito',
    'Financiamento facilitado em até 60x',
    'Monitoramento por aplicativo móvel',
    'Suporte técnico especializado 24/7',
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-200/30 dark:bg-yellow-500/5 rounded-full blur-3xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1458&auto=format&fit=crop"
              alt="Instalação Solar Profissional"
              className="rounded-[3rem] shadow-2xl w-full object-cover aspect-square"
            />
          </div>

          <div className="flex-1 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
              Compromisso real com a <span className="text-yellow-500">sua liberdade</span> energética.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Fundada com o propósito de democratizar o acesso à energia solar, a EcoFlow já transformou a vida de milhares de famílias brasileiras. Nossa equipe é composta por engenheiros de elite prontos para desenhar a solução perfeita para o seu telhado.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                to="/sobre"
                className="inline-block bg-slate-900 dark:bg-yellow-400 text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-yellow-500 transition-all shadow-lg active:scale-95"
              >
                Conheça Nossa História
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
