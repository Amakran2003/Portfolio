import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const springConfig = { stiffness: 150, damping: 15 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative overflow-hidden h-48 group">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-end gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
              >
                <Github size={18} className="text-white" />
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
            >
              <ExternalLink size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>
      <motion.div 
        className="p-5"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ z: 10 }}
      >
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-accent-light/10 dark:bg-accent-dark/20 text-accent-light dark:text-accent-dark"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
