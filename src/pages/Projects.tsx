import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageStore } from '../store/language';
import { translations } from '../translations';

const Projects = () => {
  const { language } = useLanguageStore();
  const t = translations[language].projects;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-poppins text-4xl font-bold mb-8">{t.title}</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{t.comingSoon}</h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t.details}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;