import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-xl p-6 border border-border text-center hover-lift transition-all-300"
        >
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Icon name={stat.icon} size={24} className="text-accent" />
          </div>
          <div className="text-2xl font-bold text-text-primary mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-text-secondary">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologyStats;