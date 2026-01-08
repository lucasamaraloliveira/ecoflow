
import React from 'react';
import { Sun, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-yellow-400 p-1.5 rounded-lg">
                <Sun className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">EcoFlow</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Líder em soluções de energia renovável, ajudando você a economizar e salvar o planeta simultaneamente.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 hover:text-yellow-500 transition-colors">
                <Instagram className="w-5 h-5 dark:text-white" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 hover:text-yellow-500 transition-colors">
                <Facebook className="w-5 h-5 dark:text-white" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 hover:text-yellow-500 transition-colors">
                <Twitter className="w-5 h-5 dark:text-white" />
              </a>
              <a href="#" className="p-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 hover:text-yellow-500 transition-colors">
                <Linkedin className="w-5 h-5 dark:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">Empresa</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">Nossa Equipe</a></li>
              <li><a href="#" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">Suporte</h5>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
              <li><a href="#" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">Garantia</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 dark:text-white mb-6">Newsletter</h5>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Receba dicas de economia e novidades do setor.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Seu e-mail" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-xl text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:text-white" />
              <button className="bg-slate-900 dark:bg-yellow-400 text-white dark:text-slate-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-800 dark:hover:bg-yellow-500 transition-all">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            © {new Date().getFullYear()} EcoFlow Energia Solar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
