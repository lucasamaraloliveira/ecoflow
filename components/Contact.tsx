
import React from 'react';
import { Mail, Phone, MapPin, Send, Calculator, Home } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-6">
        <div className="bg-slate-900 dark:bg-slate-900 border border-slate-800 rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-16 shadow-2xl">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-4">Solicite seu orçamento gratuito</h2>
              <p className="text-slate-400 text-lg">
                Preencha os dados abaixo e receba um estudo de viabilidade completo para sua economia mensal.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">WhatsApp</p>
                  <p className="font-semibold">(11) 98765-4321</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">E-mail Comercial</p>
                  <p className="font-semibold">orcamento@ecoflow.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Atendimento</p>
                  <p className="font-semibold">Todo o Território Nacional</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl">
               <div className="flex gap-3 items-center mb-2">
                 <Calculator className="w-5 h-5 text-yellow-400" />
                 <h4 className="text-yellow-400 font-bold">Dica Técnica</h4>
               </div>
               <p className="text-sm text-slate-400">Tenha em mãos sua última fatura de energia para fornecer dados precisos de consumo mensal em kWh.</p>
            </div>
          </div>

          <div className="flex-1 bg-white dark:bg-slate-800 p-8 lg:p-12 rounded-[2rem] shadow-inner transition-colors">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Nome Completo</label>
                  <input type="text" placeholder="Seu nome" className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">WhatsApp</label>
                  <input type="tel" placeholder="(00) 00000-0000" className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Gasto Mensal (R$)</label>
                  <input type="number" placeholder="Ex: 500" className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Tipo de Imóvel</label>
                  <select className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all appearance-none">
                    <option value="residencial">Residencial</option>
                    <option value="comercial">Comercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="rural">Rural</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Tipo de Telhado</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                   {['Cerâmico', 'Metálico', 'Laje', 'Solo'].map(type => (
                     <label key={type} className="flex flex-col items-center gap-2 p-3 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors has-[:checked]:border-yellow-400 has-[:checked]:bg-yellow-400/10">
                        <input type="radio" name="telhado" className="hidden" />
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{type}</span>
                     </label>
                   ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">E-mail</label>
                <input type="email" placeholder="seu@email.com" className="w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
              </div>

              <button className="w-full bg-yellow-400 text-slate-900 py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all active:scale-95 shadow-lg">
                Solicitar Estudo Gratuito
                <Send className="w-5 h-5" />
              </button>
              <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold mt-4">Privacidade garantida conforme LGPD</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
