import React, { useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-background rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">{project.title}</h2>
            <p className="text-text-secondary mt-1">{project.category}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            iconName="X"
            onClick={onClose}
            className="hover:bg-muted"
          />
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Project Images Gallery */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              {project.additionalImages && project.additionalImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Project Overview */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Project Overview</h3>
            <p className="text-text-secondary leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          {/* Technical Challenge */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Technical Challenge</h3>
            <p className="text-text-secondary leading-relaxed">
              {project.technicalChallenge}
            </p>
          </div>

          {/* Solution Approach */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Solution Approach</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              {project.solutionApproach}
            </p>
            <ul className="space-y-2">
              {project.solutionSteps && project.solutionSteps.map((step, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-medium mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-text-secondary">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Technology Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.techStack && Object.entries(project.techStack).map(([category, techs]) => (
                <div key={category}>
                  <h4 className="font-medium text-text-primary mb-2 capitalize">{category}</h4>
                  <div className="space-y-2">
                    {techs.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Code" size={14} className="text-accent" />
                        <span className="text-sm text-text-secondary">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                  <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Metrics */}
          {project.metrics && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Project Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-accent">{metric.value}</div>
                    <div className="text-sm text-text-secondary">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lessons Learned */}
          {project.lessonsLearned && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Lessons Learned</h3>
              <ul className="space-y-2">
                {project.lessonsLearned.map((lesson, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-background border-t border-border p-6 flex flex-col sm:flex-row gap-3">
          {project.liveUrl && (
            <Button
              variant="default"
              iconName="ExternalLink"
              iconPosition="left"
              onClick={() => window.open(project.liveUrl, '_blank')}
              className="flex-1"
            >
              View Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              iconName="Github"
              iconPosition="left"
              onClick={() => window.open(project.githubUrl, '_blank')}
              className="flex-1"
            >
              View Source Code
            </Button>
          )}
          <Button
            variant="secondary"
            onClick={onClose}
            className="flex-1 sm:flex-none"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;