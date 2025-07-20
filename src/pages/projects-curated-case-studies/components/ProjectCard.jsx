import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (project.additionalImages && project.additionalImages.length > 0) {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === project.additionalImages.length 
            ? 0 
            : prevIndex + 1
        );
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [project.additionalImages]);

  const getCurrentImage = () => {
    if (currentImageIndex === 0) return project.image;
    return project.additionalImages[currentImageIndex - 1];
  };

  return (
    <div 
      className="bg-card rounded-xl border border-border overflow-hidden hover-lift transition-all-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={getCurrentImage()}
          alt={project.title}
          className="w-full h-full object-cover transition-transform-800 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* Project Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            project.status === 'Live' ? 'bg-success text-success-foreground' 
              : project.status === 'In Development' ? 'bg-warning text-warning-foreground' 
              : 'bg-secondary text-secondary-foreground'
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Header */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-medium">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-text-primary mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.keyFeatures.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 text-xs text-text-secondary">
                <Icon name="Check" size={12} className="text-success mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Metrics */}
        {project.metrics && (
          <div className="mb-6 grid grid-cols-2 gap-4">
            {project.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-semibold text-accent">{metric.value}</div>
                <div className="text-xs text-text-secondary">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;