import React from 'react';
import Icon from '../../../components/AppIcon';

const ToolCard = ({ tool, index }) => {
  const level = Math.max(0, Math.min(5, Number(tool.proficiency) || 0));

  return (
    <div 
      className="group bg-card rounded-xl p-6 border border-border hover-lift transition-all-300 fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all-300">
            <Icon name={tool.icon} size={24} />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
            {tool.name}
          </h3>
          <p className="text-sm text-text-secondary mb-3 leading-relaxed">
            {tool.description}
          </p>
          
          {tool.useCase && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-muted rounded-lg p-3 border-l-4 border-accent">
                <p className="text-xs text-text-secondary font-medium mb-1">Use Case:</p>
                <p className="text-sm text-text-primary">{tool.useCase}</p>
              </div>
            </div>
          )}
          
          {tool.certification && (
            <div className="mt-3 flex items-center space-x-2">
              <Icon name="Award" size={14} className="text-success" />
              <span className="text-xs text-success font-medium">{tool.certification}</span>
            </div>
          )}
          
          <div className="mt-4 flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(level)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-accent rounded-full"></div>
              ))}
              {[...Array(5 - level)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-border rounded-full"></div>
              ))}
            </div>
          
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
