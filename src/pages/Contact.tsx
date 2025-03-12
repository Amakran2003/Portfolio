import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageStore } from '../store/language';
import { translations } from '../translations';

const Contact = () => {
  const { language } = useLanguageStore();
  const t = translations[language].contact;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-poppins text-4xl font-bold mb-8 text-center">{t.title}</h1>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                {t.send}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;