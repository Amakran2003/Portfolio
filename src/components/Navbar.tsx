import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useThemeStore } from '../store/theme';
import { useLanguageStore } from '../store/language';
import { translations } from '../translations';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { language } = useLanguageStore();
  const location = useLocation();

  const t = translations[language].nav;

  const navItems = [
    { path: '/', label: t.home },
    { path: '/about', label: t.about },
    { path: '/projects', label: t.projects },
    { path: '/testimonials', label: t.testimonials },
    { path: '/contact', label: t.contact },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-primary-dark/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-poppins font-bold text-2xl text-accent-light dark:text-accent-dark">
            AM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium ${
                  location.pathname === item.path
                    ? 'text-accent-light dark:text-accent-dark'
                    : 'hover:text-accent-light dark:hover:text-accent-dark'
                }`}
              >
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-light dark:bg-accent-dark"
                  />
                )}
                {item.label}
              </Link>
            ))}
            <LanguageToggle />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <LanguageToggle />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto' } : { height: 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white dark:bg-primary-dark">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'bg-accent-light/10 text-accent-light dark:text-accent-dark'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;