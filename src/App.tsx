import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useThemeStore } from './store/theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import AnimatedCursor from './components/AnimatedCursor';
import SplashScreen from './components/SplashScreen';
import '@fontsource/poppins';
import '@fontsource/inter';
import './App.css';

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

  // Parse the URL to handle GitHub Pages SPA redirection
  useEffect(() => {
    // Check if we have a redirect path from GitHub Pages in the query string
    const queryParams = new URLSearchParams(window.location.search);
    const redirectPath = queryParams.get('p');
    
    if (redirectPath) {
      // Remove the query parameter and navigate to the correct path
      window.history.replaceState(null, '', window.location.pathname);
      navigate(redirectPath);
    }
  }, [navigate]);

  // Handle splash screen completion
  const handleSplashComplete = () => {
    setShowSplash(false);
    
    // Ensure we're at the correct route after splash
    // For GitHub Pages, we might need to parse the URL
    const path = window.location.pathname.replace('/Portfolio', '');
    if (path === '' || path === '/') {
      navigate('/');
    } else {
      // If there's a specific path, navigate to it
      navigate(path);
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark font-inter transition-colors duration-300">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <AnimatedCursor />
    </div>
  );
}

export default App;