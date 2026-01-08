import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import {
  AboutPage,
  TeamPage,
  CareersPage,
  BlogPage,
  HelpCenterPage,
  PrivacyPage,
  TermsPage,
  WarrantyPage,
} from './pages';

// Scroll to top on route change
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  // Inicializa o tema baseado na preferência do sistema ou memória (opcional)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <ScrollToTopOnNavigate />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/equipe" element={<TeamPage />} />
        <Route path="/carreiras" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/ajuda" element={<HelpCenterPage />} />
        <Route path="/privacidade" element={<PrivacyPage />} />
        <Route path="/termos" element={<TermsPage />} />
        <Route path="/garantia" element={<WarrantyPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
