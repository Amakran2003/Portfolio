import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import ProjectCard from './ProjectCard';

interface ProjectCategoryProps {
  title: string;
  projects: Project[];
}

const ProjectCategory: React.FC<ProjectCategoryProps> = ({ title, projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-accent-light to-secondary-light dark:from-accent-dark dark:to-secondary-dark bg-clip-text text-transparent">
        {title}
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCategory;
