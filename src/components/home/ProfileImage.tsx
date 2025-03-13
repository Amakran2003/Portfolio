import React from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

const ProfileImage: React.FC = () => {
  return (
    <motion.div
      className="lg:w-1/2 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
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
      <motion.div
        className="relative"
        animate={{ rotateY: [0, 10, 0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      >
        <motion.img
          animate={{ 
            y: [-10, 10, -10],
            rotateZ: [0, 2, 0, -2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src="https://avatars.githubusercontent.com/u/145991267?v=4"
          alt="Abderrazaq Makran"
          className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover mx-auto shadow-2xl border-4 border-white dark:border-gray-800"
        />
        <motion.div
          className="absolute -bottom-10 -right-10 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg"
          animate={{ y: [-5, 5, -5], rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Upload className="w-8 h-8 text-accent-light dark:text-accent-dark" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileImage;
