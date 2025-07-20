import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import AnimatedText from './AnimatedText';

const HeroContent = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div className="space-y-2">
        <p className="text-lg text-text-secondary font-medium">
          Hello, I'm
        </p>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-600 leading-tight">
          Anam Aya
        </h1>
      </div>
      
      {/* Animated role */}
      <AnimatedText />
      
      {/* Main headline */}
      <div className="space-y-4">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-text-primary leading-relaxed">
          Building Scalable Solutions with{' '}
          <span className="text-accent">Modern Technology</span> Stacks
        </h2>
        
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
          Passionate full-stack developer specializing in MERN and PERN stacks, creating robust web applications with clean code and intuitive user experiences. Based in Casablanca, delivering solutions globally.
        </p>
      </div>
      
      {/* Key highlights */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center space-x-2 bg-surface px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-success rounded-full"></div>
          <span className="text-text-secondary">2 Years Experience</span>
        </div>
        <div className="flex items-center space-x-2 bg-surface px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span className="text-text-secondary">5 Projects Completed</span>
        </div>
        <div className="flex items-center space-x-2 bg-surface px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-warning rounded-full"></div>
          <span className="text-text-secondary">Global Clients</span>
        </div>
      </div>
      
      {/* Call-to-action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link to="/projects-curated-case-studies">
          <Button
            variant="default"
            size="lg"
            iconName="FolderOpen"
            iconPosition="right"
            className="w-full sm:w-auto hover-lift">

            View My Work
          </Button>
        </Link>
        
        <Link to="/contact-communication-portal">
          <Button
            variant="outline"
            size="lg"
            iconName="Mail"
            iconPosition="right"
            className="w-full sm:w-auto hover-lift">

            Get In Touch
          </Button>
        </Link>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
        <div className="text-center">
          <div className="text-2xl lg:text-3xl font-bold text-primary">6</div>
          <div className="text-sm text-text-secondary">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-2xl lg:text-3xl font-bold text-primary">2</div>
          <div className="text-sm text-text-secondary">Years Exp</div>
        </div>
        <div className="text-center">
          <div className="text-2xl lg:text-3xl font-bold text-primary">15+</div>
          <div className="text-sm text-text-secondary">Technologies</div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;