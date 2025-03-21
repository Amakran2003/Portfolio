import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingShapes from '../components/home/FloatingShapes';
import PageTransition from '../components/common/PageTransition';
import HeroSection from '../components/home/HeroSection';
import ProfileImage from '../components/home/ProfileImage';

const Home = () => {
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
            <HeroSection />
            <ProfileImage />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;