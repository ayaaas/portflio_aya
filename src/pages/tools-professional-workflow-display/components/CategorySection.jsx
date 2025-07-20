import React from 'react';
import Icon from '../../../components/AppIcon';
import ToolCard from './ToolCard';

const CategorySection = ({ category, index }) => {
  return (
    <div 
      className="mb-16 fade-in"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
          <Icon name={category.icon} size={24} className="text-accent-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-1">
            {category.name}
          </h2>
          <p className="text-text-secondary">
            {category.description}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.tools.map((tool, toolIndex) => (
          <ToolCard 
            key={tool.id} 
            tool={tool} 
            index={toolIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;