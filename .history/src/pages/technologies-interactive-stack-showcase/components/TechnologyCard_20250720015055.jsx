import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyCard = ({ technology, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative bg-card rounded-xl p-6 border transition-all-300 cursor-pointer hover-lift ${
        isActive 
          ? 'border-accent shadow-lg bg-accent/5' 
          : 'border-border hover:border-accent/50 hover:shadow-md'
      }`}
      style={{ width: '280px', height: '380px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}
    >
      {/* Technology Icon */}
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg bg-surface group-hover:bg-accent/10 transition-all-300">
        <Icon 
          name={technology.icon} 
          size={32} 
          className={`transition-all-300 ${
            isActive ? 'text-accent' : 'text-text-secondary group-hover:text-accent'
          }`}
        />
      </div>

      {/* Technology Name */}
      <h3 className={`text-lg font-semibold text-center mb-2 transition-all-300 ${
        isActive ? 'text-accent' : 'text-text-primary group-hover:text-accent'
      }`}>
        {technology.name}
      </h3>

      {/* Proficiency Level */}
      <div className="flex items-center justify-center mb-3">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all-300 ${
                index < technology.proficiency
                  ? isActive 
                    ? 'bg-accent' :'bg-accent/70 group-hover:bg-accent' :'bg-border group-hover:bg-accent/20'
              }`}
            />
          ))}
        </div>
        <span className="ml-2 text-xs text-text-secondary font-medium">
          {technology.level}
        </span>
      </div>

      {/* Description */}
      <p 
        className="text-sm text-text-secondary text-center leading-relaxed mb-4"
        style={{
          flexGrow: 1,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 4, // max 4 lines
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
        }}
      >
        {technology.description}
      </p>

      {/* Experience Badge */}
      <div className="flex items-center justify-center mt-auto">
        <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all-300 ${
          isActive
            ? 'bg-accent text-accent-foreground'
            : 'bg-surface text-text-secondary group-hover:bg-accent/10 group-hover:text-accent'
        }`}>
          {technology.experience}
        </span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all-300 pointer-events-none" />
    </div>
  );
};

export default TechnologyCard;
