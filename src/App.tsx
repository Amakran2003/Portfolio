import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useThemeStore } from './store/theme';
import Navbar from './components/common/Navbar';
import AnimatedCursor from './components/common/AnimatedCursor';
import SplashScreen from './components/common/SplashScreen';
import ScrollToTop from './components/common/ScrollToTop';
import UnderConstructionBanner from './components/common/UnderConstructionBanner';
import '@fontsource/poppins';
import '@fontsource/inter';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle splash screen completion
  const handleSplashComplete = () => {
    setShowSplash(false);
    
    // With HashRouter, we can simply navigate to the current path
    // This works consistently across all browsers
    const path = location.pathname || '/';
    navigate(path);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark font-inter transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <UnderConstructionBanner />
      <AnimatePresence mode="wait">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <AnimatedCursor />
    </div>
  );
}

export default App;