import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../store/language';
import { translations } from '../translations';

const Home = () => {
  const { language } = useLanguageStore();
  const t = translations[language].home;

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-primary-light to-white dark:from-primary-dark dark:to-primary-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
          >
            <h1 className="font-poppins text-5xl font-extrabold mb-6">
              {t.greeting}{' '}
              <span className="bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark bg-clip-text text-transparent animate-gradient">
                Abderrazaq Makran
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              {t.role}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark text-white rounded-full hover:opacity-90 transition-opacity"
                >
                  {t.viewWork}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <div className="flex items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <GitHub size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 bg-gradient-to-r from-accent-light/20 to-secondary-light/20 dark:from-accent-dark/20 dark:to-secondary-dark/20 rounded-full blur-3xl"
              />
              <motion.img
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600"
                alt="Abderrazaq Makran"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover mx-auto shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;