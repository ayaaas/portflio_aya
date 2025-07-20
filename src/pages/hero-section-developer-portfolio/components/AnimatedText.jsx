import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const roles = [
    'Full-Stack Developer',
    'MERN Stack Specialist', 
    'Problem Solver',
    'Casablanca-Based'
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeoutId;
    
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentRoleIndex, roles]);
  
  return (
    <div className="h-16 flex items-center">
      <span className="text-2xl lg:text-3xl font-semibold text-accent">
        {displayText}
        <span className="animate-pulse text-primary">|</span>
      </span>
    </div>
  );
};

export default AnimatedText;