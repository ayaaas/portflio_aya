import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled < 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
      <span className="text-sm text-text-secondary font-medium">Scroll to explore</span>
      <button
        onClick={scrollToNext}
        className="p-2 rounded-full bg-surface hover:bg-accent hover:text-accent-foreground transition-all-300 hover-lift"
        aria-label="Scroll to next section"
      >
        <Icon name="ChevronDown" size={20} />
      </button>
    </div>
  );
};

export default ScrollIndicator;