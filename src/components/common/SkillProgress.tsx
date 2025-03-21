import React from 'react';
import { motion } from 'framer-motion';

interface SkillProgressProps {
  name: string;
  percentage: number;
  color?: string;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ 
  name, 
  percentage, 
  color = 'bg-accent-light dark:bg-accent-dark' 
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-sm">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;
