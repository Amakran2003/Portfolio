import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Code, Gauge, TestTube, Ear, Heart } from 'lucide-react';
import { useLanguageStore } from '../store/language';
import { translations } from '../translations';

const About = () => {
  const { language } = useLanguageStore();
  const t = translations[language].about;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const qualities = [
    { icon: CheckCircle, text: t.qualitiesList.attention },
    { icon: Code, text: t.qualitiesList.code },
    { icon: Gauge, text: t.qualitiesList.optimization },
    { icon: TestTube, text: t.qualitiesList.testing },
    { icon: Ear, text: t.qualitiesList.listening },
    { icon: Heart, text: t.qualitiesList.authenticity },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-primary-light to-white dark:from-primary-dark dark:to-primary-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          <motion.div variants={itemVariants}>
            <h1 className="font-poppins text-4xl font-bold mb-8 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark bg-clip-text text-transparent animate-gradient">{t.title}</h1>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">{t.description1}</p>
                <p className="text-lg leading-relaxed">{t.description2}</p>
              </div>
              <motion.div
                variants={itemVariants}
                className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl"
              >
                <h2 className="text-2xl font-semibold mb-6">{t.qualities}</h2>
                <div className="space-y-4">
                  {qualities.map((quality, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                    >
                      <quality.icon className="w-6 h-6 text-accent-light dark:text-accent-dark" />
                      <span className="text-lg">{quality.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">{t.skills}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4 text-accent-light dark:text-accent-dark">{t.frontend}</h3>
                <div className="space-y-3">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4 text-secondary-light dark:text-secondary-dark">{t.backend}</h3>
                <div className="space-y-3">
                  {['Node.js', 'Express', 'PostgreSQL', 'MongoDB'].map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="p-3 rounded-lg bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;