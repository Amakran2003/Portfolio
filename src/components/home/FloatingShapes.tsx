import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingShapes = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  // Update window dimensions when resized
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate more shapes with positions across the entire viewport
  const shapes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    type: Math.random() > 0.5 ? 'circle' : 'square',
    x: Math.random() * 100, // Percentage of viewport width
    y: Math.random() * 100, // Percentage of viewport height
    size: 10 + Math.random() * 30,
    duration: 15 + Math.random() * 25,
    delay: Math.random() * 5,
    opacity: 0.1 + Math.random() * 0.2,
    color: i % 3 === 0 ? 'accent' : i % 3 === 1 ? 'secondary' : 'gray',
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${
            shape.type === 'circle' ? 'rounded-full' : 'rounded-md'
          } ${
            shape.color === 'accent' 
              ? 'bg-accent-light dark:bg-accent-dark' 
              : shape.color === 'secondary' 
              ? 'bg-secondary-light dark:bg-secondary-dark' 
              : 'bg-gray-400 dark:bg-gray-600'
          }`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: shape.opacity,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -60, 40, 0],
            rotate: [0, 180, 270, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
