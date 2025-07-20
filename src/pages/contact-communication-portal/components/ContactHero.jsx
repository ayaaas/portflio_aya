import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-6">
        <Icon name="MessageSquare" size={40} color="var(--color-accent)" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
        Let's Start a
        <span className="text-accent block">Conversation</span>
      </h1>
      
      <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-8">
        Whether you have a project in mind, need technical consultation, or want to explore collaboration opportunities, 
        I'm here to help turn your ideas into reality.
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
        <div className="flex items-center space-x-2">
          <Icon name="Clock" size={16} color="var(--color-success)" />
          <span>24h Response Time</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Shield" size={16} color="var(--color-success)" />
          <span>NDA Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Globe" size={16} color="var(--color-success)" />
          <span>Remote Friendly</span>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;