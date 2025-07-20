import React from 'react';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      <Button
        variant={activeCategory === 'All' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onCategoryChange('All')}
        className="transition-all-300"
      >
        All Projects
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className="transition-all-300"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilter;