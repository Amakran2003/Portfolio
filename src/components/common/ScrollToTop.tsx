import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that scrolls to the top of the page when the route changes
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Add a small delay to ensure DOM is fully updated
    const timeoutId = setTimeout(() => {
      // Try multiple scroll methods for better mobile compatibility
      if (window.scrollTo) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'auto' // Use 'auto' instead of 'smooth' for more reliable behavior
        });
      }
      
      // Fallback for older browsers and Safari on iOS
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0; // Specifically for Safari on iOS
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
