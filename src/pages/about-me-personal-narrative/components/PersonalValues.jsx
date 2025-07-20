import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalValues = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Quality First',
      description: 'Every project deserves attention to detail and commitment to excellence. I believe in writing clean, maintainable code that stands the test of time.',
      color: 'text-blue-600'
    },
    {
      icon: 'Users',
      title: 'User-Centered Approach',
      description: 'Technology should serve people, not the other way around. I design and develop with the end user\'s experience as the primary consideration.',
      color: 'text-green-600'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation & Learning',
      description: 'The tech landscape evolves rapidly, and so do I. Continuous learning and adaptation are essential to delivering modern, effective solutions.',
      color: 'text-purple-600'
    },
    {
      icon: 'Globe',
      title: 'Global Mindset',
      description: 'Based in Casablanca but thinking globally. I bring diverse perspectives to international teams while maintaining universal standards of professionalism.',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-primary">
          What Drives Me
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          My core values shape every project I undertake and every line of code I write. 
          These principles guide my approach to development and collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div 
            key={index}
            className="group bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-all-300 hover-lift"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-surface rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-all-300">
                <Icon name={value.icon} size={24} className={`${value.color} group-hover:scale-110 transition-transform`} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Personal Quote */}
      <div className="relative bg-gradient-to-br from-accent/5 via-primary/5 to-success/5 rounded-2xl p-8 border border-accent/10">
        <div className="absolute top-4 left-4">
          <Icon name="Quote" size={32} className="text-accent/20" />
        </div>
        
        <div className="relative z-10 text-center space-y-4">
          <blockquote className="text-lg lg:text-xl text-primary font-medium italic leading-relaxed">
            "Great software is not just about solving problems—it's about creating experiences that make people's lives better, one interaction at a time."
          </blockquote>
          <cite className="text-text-secondary font-medium">— Anam Aya</cite>
        </div>
        
        <div className="absolute bottom-4 right-4">
          <Icon name="Quote" size={32} className="text-primary/20 rotate-180" />
        </div>
      </div>

      {/* Fun Facts */}
      <div className="bg-muted rounded-xl p-6">
        <h3 className="text-lg font-semibold text-primary mb-4 text-center">Beyond Code</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <Icon name="Coffee" size={24} className="text-accent mx-auto" />
            <p className="text-sm text-text-secondary">
              <span className="font-medium text-primary">Coffee Enthusiast</span><br />
              Fueled by quality coffee and clean code
            </p>
          </div>
          
          <div className="space-y-2">
            <Icon name="BookOpen" size={24} className="text-success mx-auto" />
            <p className="text-sm text-text-secondary">
              <span className="font-medium text-primary">Continuous Learner</span><br />
              Always exploring new technologies
            </p>
          </div>
          
          <div className="space-y-2">
            <Icon name="Compass" size={24} className="text-warning mx-auto" />
            <p className="text-sm text-text-secondary">
              <span className="font-medium text-primary">Cultural Bridge</span><br />
              Connecting Morocco with global tech
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalValues;