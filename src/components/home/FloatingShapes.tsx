
import { motion } from 'framer-motion';

const FloatingShapes = () => {
  // Generate random shapes with different positions, sizes and colors
  const shapes = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    type: Math.random() > 0.5 ? 'circle' : 'square',
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 10 + Math.random() * 20,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 5,
    opacity: 0.1 + Math.random() * 0.2,
    color: i % 3 === 0 ? 'accent' : i % 3 === 1 ? 'secondary' : 'gray',
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute rounded-full ${
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
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
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
