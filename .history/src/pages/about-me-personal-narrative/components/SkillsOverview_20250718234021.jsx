import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsOverview = () => {
  const skillCategories = [
  {
    category: 'Frontend Development',
    icon: 'Monitor',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3'],
    color: 'text-blue-600'
  },
  {
    category: 'Mobile Development',
    icon: 'Smartphone',
    skills: ['Flutter', 'Dart', 'Audioplayers'],
    color: 'text-pink-600'
  },
  {
    category: 'Backend Development',
    icon: 'Server',
    skills: ['Node.js', 'Express.js', 'PHP', 'Java', 'RESTful APIs'],
    color: 'text-green-600'
  },
  {
    category: 'Database & Tools',
    icon: 'Database',
    skills: ['MongoDB', 'SQFLite', 'PostgreSQL', 'MySQL'],
    color: 'text-purple-600'
  },
  {
    category: 'Development Practices',
    icon: 'Settings',
    skills: ['Agile/Scrum', 'Code Review', 'Performance Optimization'],
    color: 'text-orange-600'
  }, 
  {
    category: 'Development Practices',
    icon: 'Settings',
    skills: ['Agile/Scrum', 'Code Review', 'Performance Optimization'],
    color: 'text-orange-600'
  },'Git', 'Docker'
];


  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary">
          Technical Expertise
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          A comprehensive skill set spanning the full development lifecycle, 
          from concept to deployment and maintenance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all-300 hover-lift"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                <Icon name={category.icon} size={20} className={category.color} />
              </div>
              <h3 className="text-lg font-semibold text-primary">{category.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full hover:bg-accent/10 hover:text-accent transition-all-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
        <h3 className="text-xl font-semibold text-primary mb-6 text-center">Development Journey</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-primary">Full-Stack Development Focus</h4>
              <p className="text-sm text-text-secondary">
                Specializing in modern web applications with React, Node.js, and cloud deployment
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-primary">Academic Foundation</h4>
              <p className="text-sm text-text-secondary">
                Bachelor's degree in Software Development with focus on algorithms and system design
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-3 h-3 bg-success rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-medium text-primary">Continuous Learning</h4>
              <p className="text-sm text-text-secondary">
                Staying current with Next.js, TypeScript, and modern development practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsOverview;