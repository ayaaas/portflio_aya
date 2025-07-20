import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalStory = () => {
  const highlights = [
    {
      icon: 'GraduationCap',
      title: 'Educational Foundation',
      description: 'Bachelor\'s degree in Software Development'
    },
    {
      icon: 'MapPin',
      title: 'Global Perspective',
      description: 'Casablanca-based, internationally minded'
    },
    {
      icon: 'Code2',
      title: 'Multi-Stack Expertise',
      description: 'MERN, PERN, Java, PHP proficiency'
    },
    {
      icon: 'TrendingUp',
      title: 'Continuous Learning',
      description: 'Modern frameworks: Next.js, TypeScript'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Building Digital Experiences That Matter
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Hi, I'm Anam Aya, a passionate full-stack developer based in Casablanca, Morocco. 
            My journey in software development began with a fascination for how technology can 
            solve real-world problems and create meaningful user experiences.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-text-secondary leading-relaxed">
            With a Bachelor's degree in Software Development as my foundation, I've dedicated 
            myself to mastering the art of creating scalable, efficient applications. My approach 
            combines technical excellence with user-centered design thinking, ensuring that every 
            project I work on delivers both robust functionality and intuitive experiences.
          </p>
          
          <p className="text-text-secondary leading-relaxed">
            What sets me apart is my unique perspective as a developer bridging emerging markets 
            with global technology standards. Based in Casablanca, I bring fresh insights to 
            international teams while maintaining the highest standards of code quality and 
            professional practices.
          </p>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {highlights.map((highlight, index) => (
          <div 
            key={index}
            className="flex items-start space-x-4 p-4 rounded-lg bg-surface hover:bg-muted transition-all-300 hover-lift"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name={highlight.icon} size={24} className="text-accent" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-primary">{highlight.title}</h3>
              <p className="text-sm text-text-secondary">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy */}
      <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-xl p-6 border border-accent/10">
        <h3 className="text-xl font-semibold text-primary mb-4">My Development Philosophy</h3>
        <div className="space-y-3">
          <p className="text-text-secondary leading-relaxed">
            I believe that great software is born from the intersection of clean code, thoughtful 
            architecture, and deep understanding of user needs. Every line of code I write is 
            guided by principles of maintainability, scalability, and performance.
          </p>
          <p className="text-text-secondary leading-relaxed">
            My commitment to continuous learning keeps me at the forefront of modern development 
            practices. Whether it's adopting Next.js for better performance, implementing TypeScript 
            for type safety, or exploring new architectural patterns, I'm always evolving my craft.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <div className="flex items-center space-x-2 text-text-secondary">
          <Icon name="Mail" size={18} className="text-accent" />
          <span className="text-sm">ayaaname0@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2 text-text-secondary">
          <Icon name="MapPin" size={18} className="text-accent" />
          <span className="text-sm">Casablanca, Morocco</span>
        </div>
        <div className="flex items-center space-x-2 text-text-secondary">
          <Icon name="Clock" size={18} className="text-accent" />
          <span className="text-sm">GMT+1 Timezone</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalStory;