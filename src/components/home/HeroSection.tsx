import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguageStore } from '../../store/language';
import { translations } from '../../translations';
import AnimatedText from '../AnimatedText';
import SocialLinks from '../home/SocialLinks';
import TechStack from '../home/TechStack';

const HeroSection: React.FC = () => {
  const { language } = useLanguageStore();
  const t = translations[language].home;

  return (
    <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
      <AnimatedText 
        text={t.greeting} 
        className="font-poppins text-5xl font-extrabold mb-3"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <span className="bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark bg-clip-text text-transparent animate-gradient font-poppins text-5xl font-extrabold">
          Abderrazaq Makran
        </span>
      </motion.div>
      
      <motion.p 
        className="text-xl mt-6 mb-8 text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {t.role}
      </motion.p>
      
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/projects"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white rounded-full hover:shadow-lg transition-all duration-300"
          >
            {t.viewWork}
            <ArrowRight size={20} />
          </Link>
        </motion.div>
        <SocialLinks />
      </motion.div>
      
      <TechStack />
    </div>
  );
};

export default HeroSection;
