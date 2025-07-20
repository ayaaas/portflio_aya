import React, { useState, useEffect } from 'react';

const SkillProgressBar = ({ skill, delay = 0 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [skill.percentage, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-text-primary">
          {skill.name}
        </span>
        <span className="text-sm text-text-secondary">
          {skill.percentage}%
        </span>
      </div>
      <div className="w-full bg-surface rounded-full h-2">
        <div
          className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SkillProgressBar;