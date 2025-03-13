import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.a
        whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/Amakran2003"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Github size={24} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1, rotate: -5, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
        whileTap={{ scale: 0.95 }}
        href="https://www.linkedin.com/in/abderrazaq-makran?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8qaZ0UJXTjqa1bxj%2Fpr8hg%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Linkedin size={24} />
      </motion.a>
    </div>
  );
};

export default SocialLinks;
