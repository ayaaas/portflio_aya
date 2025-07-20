import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = () => {
  const stats = [
    {
      id: 1,
      icon: "Wrench",
      value: "7+",
      label: "Professional Tools",
      description: "Industry-standard development tools"
    },
    {
      id: 2,
      icon: "Zap",
      value: "5+",
      label: "Workflow Categories",
      description: "Comprehensive development pipeline"
    },
    {
      id: 3,
      icon: "Award",
      value: "25+",
      label: "Certifications",
      description: "Professional tool certifications"
    },
    {
      id: 4,
      icon: "TrendingUp",
      value: "2+",
      label: "Years Experience",
      description: "Professional development experience"
    }
  ];

  return (
    <div className="bg-surface rounded-2xl p-8 mb-16 border border-border">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Professional Toolkit Overview
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A comprehensive collection of industry-standard tools that power modern development workflows, 
          from initial design to production deployment.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={stat.id}
            className="text-center group hover-lift fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icon name={stat.icon} size={28} className="text-accent-foreground" />
            </div>
            <div className="text-3xl font-bold text-text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-text-primary mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-text-secondary">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;