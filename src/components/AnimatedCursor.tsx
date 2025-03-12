import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    const handleMouseOver = () => setCursorVariant('hover');
    const handleMouseOut = () => setCursorVariant('default');

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      mixBlendMode: 'difference' as const,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
      mixBlendMode: 'difference' as const,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 20, mass: 0.1 }}
      />
    </>
  );
};

export default AnimatedCursor;
