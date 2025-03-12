import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github as GitHub, Linkedin, ArrowRight, Code, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguageStore } from '../store/language';
import { translations } from '../translations';
import AnimatedText from '../components/AnimatedText';
import FloatingShapes from '../components/FloatingShapes';
import PageTransition from '../components/PageTransition';

const Home = () => {
  const { language } = useLanguageStore();
  const t = translations[language].home;
  
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-gradient-to-br from-primary-light to-white dark:from-primary-dark dark:to-primary-dark/50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FloatingShapes />
          
          <motion.div
            ref={targetRef}
            style={{ scale, opacity, y }}
            className="relative z-10 flex flex-col lg:flex-row items-center justify-between py-20"
          >
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
                <div className="flex items-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 5, backgroundColor: "rgba(99, 102, 241, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Amakran2003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <GitHub size={24} />
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
              </motion.div>
              
              <motion.div 
                className="hidden lg:flex flex-wrap gap-3 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                {['React', 'TypeScript', 'Node.js', 'Tailwind'].map((tech, i) => (
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
            </div>
            
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
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;