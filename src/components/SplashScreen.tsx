import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Code, Layers, Lightbulb } from 'lucide-react';
import { useLanguageStore } from '../store/language';
import { translations } from '../translations';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const { language } = useLanguageStore();
  const t = translations[language].common;
  
  useEffect(() => {
    // Auto-redirect after animation completes (2.5 seconds)
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary-light dark:bg-primary-dark z-50">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Logo Animation */}
        <motion.div 
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="w-24 h-24 rounded-full bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark flex items-center justify-center text-white text-4xl font-bold"
            animate={{ 
              boxShadow: [
                "0px 0px 0px 0px rgba(99, 102, 241, 0.4)",
                "0px 0px 50px 10px rgba(99, 102, 241, 0.4)",
                "0px 0px 0px 0px rgba(99, 102, 241, 0.4)"
              ]
            }}
            transition={{ duration: 2, repeat: 0 }}
          >
            AM
          </motion.div>
          
          {/* Animated icons around the logo */}
          <motion.div
            className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
            initial={{ x: -20, y: -20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Code className="w-5 h-5 text-accent-light dark:text-accent-dark" />
          </motion.div>
          
          <motion.div
            className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
            initial={{ x: 20, y: -20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Layers className="w-5 h-5 text-accent-light dark:text-accent-dark" />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <Lightbulb className="w-5 h-5 text-accent-light dark:text-accent-dark" />
          </motion.div>
        </motion.div>
        
        {/* Text Animation */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold font-poppins bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark bg-clip-text text-transparent">
            Abderrazaq Makran
          </h1>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {t.fullStackDeveloper}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
