import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageStore } from '../store/language';
import { translations } from '../translations';
import { schoolProjects, websiteProjects, hackatonProjects } from '../data/projects';
import ProjectCategory from '../components/projects/ProjectCategory';
import PageTransition from '../components/common/PageTransition';

const Projects = () => {
  const { language } = useLanguageStore();
  const t = translations[language].projects;

  return (
    <PageTransition>
      <div className="min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-poppins text-4xl font-bold mb-12">{t.title}</h1>
            
            <ProjectCategory title={t.websiteProjects} projects={websiteProjects} />
            <ProjectCategory title={t.hackathonProjects} projects={hackatonProjects} />
            <ProjectCategory title={t.schoolProjects} projects={schoolProjects} />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;