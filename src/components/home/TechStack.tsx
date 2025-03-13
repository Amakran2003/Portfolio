import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const TechStack: React.FC = () => {
  const technologies = ['React', 'TypeScript', 'Node.js', 'Tailwind'];
  
  return (
    <motion.div 
      className="hidden lg:flex flex-wrap gap-3 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      {technologies.map((tech, i) => (
        <motion.div
          key={tech}
          className="flex items-center gap-1 px-3 py-1 rounded-full bg-white dark:bg-gray-800 shadow-sm"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8 + (i * 0.1) }}
        >
          <Code size={14} className="text-accent-light dark:text-accent-dark" />
          <span className="text-sm">{tech}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;
