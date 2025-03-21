import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Construction } from 'lucide-react';
import { useLanguageStore } from '../../store/language';

const UnderConstructionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { language } = useLanguageStore();
  
  // Check if the banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('construction-banner-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('construction-banner-dismissed', 'true');
  };

  const text = {
    en: "🚧 This portfolio is still under construction. Feel free to explore while I'm adding the finishing touches!",
    fr: "🚧 Ce portfolio est toujours en construction. N'hésitez pas à explorer pendant que j'ajoute les touches finales !"
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white py-2 px-4 shadow-md"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Construction size={18} />
              <p className="text-sm md:text-base">{language === 'en' ? text.en : text.fr}</p>
            </div>
            <button 
              onClick={handleDismiss}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UnderConstructionBanner;
