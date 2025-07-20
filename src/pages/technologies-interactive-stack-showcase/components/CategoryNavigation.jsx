import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryNavigation = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all-300 hover-lift ${
            activeCategory === category.id
              ? 'bg-accent text-accent-foreground shadow-lg'
              : 'bg-surface text-text-secondary hover:bg-accent/10 hover:text-accent border border-border'
          }`}
        >
          <Icon 
            name={category.icon} 
            size={18} 
            className={activeCategory === category.id ? 'text-accent-foreground' : 'text-current'}
          />
          <span>{category.name}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            activeCategory === category.id
              ? 'bg-accent-foreground/20 text-accent-foreground'
              : 'bg-accent/10 text-accent'
          }`}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryNavigation;