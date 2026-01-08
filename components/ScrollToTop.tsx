
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          flex items-center justify-center
          p-3 rounded-full shadow-2xl 
          bg-slate-900 dark:bg-yellow-400 text-yellow-400 dark:text-slate-900
          transition-all duration-300 ease-in-out
          hover:bg-yellow-400 dark:hover:bg-white hover:text-slate-900 hover:scale-110 active:scale-90
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
        aria-label="Voltar ao início"
      >
        <ChevronUp className="w-8 h-8 stroke-[3px]" />
      </button>
    </div>
  );
};

export default ScrollToTop;
