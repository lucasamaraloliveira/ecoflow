
import React, { useState, useEffect } from 'react';
import { Sun, Menu, X, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 transition-all duration-300 rounded-2xl ${
        isScrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3 border border-slate-200/50 dark:border-slate-700/50' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-yellow-400 p-1.5 rounded-lg shadow-sm group-hover:rotate-12 transition-transform">
            <Sun className="w-6 h-6 text-slate-900" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white transition-colors">EcoFlow</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            aria-label="Alternar tema"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button className="bg-slate-900 dark:bg-yellow-400 text-white dark:text-slate-900 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 dark:hover:bg-yellow-500 transition-all shadow-md active:scale-95">
            Começar Agora
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
           <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="text-slate-700 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-600 dark:text-slate-300 py-2 border-b border-slate-50 dark:border-slate-800 last:border-0"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-yellow-400 text-slate-900 w-full py-3 rounded-xl font-bold">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
