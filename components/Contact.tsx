
import React from 'react';
import { Mail, Phone, MapPin, Send, Calculator, Home } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 dark:bg-slate-900 border border-slate-800 rounded-[2.5rem] sm:rounded-[4rem] p-6 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>

          <div className="flex-1 space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">Solicite seu orçamento gratuito</h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-xl">
                Preencha os dados abaixo e receba um estudo de viabilidade completo para sua economia mensal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-12 h-12 bg-white/5 group-hover:bg-yellow-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">WhatsApp</p>
                  <p className="font-semibold text-sm sm:text-base">(11) 98765-4321</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-12 h-12 bg-white/5 group-hover:bg-yellow-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">E-mail Comercial</p>
                  <p className="font-semibold text-sm sm:text-base break-all">orcamento@ecoflow.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-12 h-12 bg-white/5 group-hover:bg-yellow-400/10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Atendimento</p>
                  <p className="font-semibold text-sm sm:text-base">Todo o Território Nacional</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-yellow-400/5 border border-yellow-400/10 rounded-3xl">
              <div className="flex gap-3 items-center mb-3">
                <Calculator className="w-5 h-5 text-yellow-400" />
                <h4 className="text-yellow-400 font-bold text-sm sm:text-base uppercase tracking-wider">Dica Técnica</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">Tenha em mãos sua última fatura de energia para fornecer dados precisos de consumo mensal em kWh.</p>
            </div>
          </div>

          <div className="flex-1 bg-white dark:bg-slate-800 p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-inner transition-colors">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
                  <input type="text" placeholder="Seu nome" className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">WhatsApp</label>
                  <input type="tel" placeholder="(00) 00000-0000" className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all font-medium" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Gasto Mensal (R$)</label>
                  <input type="number" placeholder="Ex: 500" className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Tipo de Imóvel</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all appearance-none font-medium">
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="rural">Rural</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                      <Home className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Tipo de Telhado</label>
                <div className="grid grid-cols-2 xs:grid-cols-4 gap-3">
                  {['Cerâmico', 'Metálico', 'Laje', 'Solo'].map(type => (
                    <label key={type} className="flex flex-col items-center justify-center p-3 border border-slate-200 dark:border-slate-700 rounded-2xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-all has-[:checked]:border-yellow-400 has-[:checked]:bg-yellow-400/5 group text-center h-16">
                      <input type="radio" name="telhado" className="hidden" />
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 group-hover:text-yellow-600 transition-colors uppercase tracking-tighter">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
                <input type="email" placeholder="seu@email.com" className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all font-medium" />
              </div>

              <button className="w-full bg-yellow-400 text-slate-900 py-4.5 rounded-xl font-black text-lg flex items-center justify-center gap-3 hover:bg-yellow-500 transition-all active:scale-95 shadow-xl shadow-yellow-400/20 mt-4 group">
                Solicitar Estudo Gratuito
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-[9px] text-center text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50">Privacidade garantida conforme LGPD</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
