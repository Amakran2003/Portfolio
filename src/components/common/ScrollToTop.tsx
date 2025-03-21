import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that scrolls to the top of the page when the route changes
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use immediate scrolling instead of smooth scrolling
    // to ensure it happens before any animations
    window.scrollTo(0, 0);
    
    // Alternative approach: delay slightly to ensure it runs after any route changes
    // const timeout = setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 100);
    // return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
