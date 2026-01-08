
import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-yellow-50/50 dark:from-yellow-900/10 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-200/20 dark:bg-yellow-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            Energia do Futuro, Hoje
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] transition-colors">
            Ilumine seu mundo com <span className="text-yellow-500">energia limpa</span> e inesgotável.
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
            A EcoFlow oferece soluções completas em energia solar para sua residência ou empresa. Reduza sua conta de luz em até 95% e contribua para um planeta mais sustentável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-yellow-400 text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-yellow-500 transition-all shadow-xl hover:shadow-yellow-200/50 group">
              Simular Economia
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              Ver Projetos
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              Garantia de 25 anos
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              Instalação Certificada
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-yellow-400 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1470&auto=format&fit=crop" 
            alt="Painéis Solares EcoFlow" 
            className="relative rounded-[2.5rem] shadow-2xl object-cover aspect-[4/3] w-full transform hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl border border-slate-50 dark:border-slate-800 hidden md:block animate-bounce-slow">
            <p className="text-3xl font-black text-yellow-500">95%</p>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">De Economia Média</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
