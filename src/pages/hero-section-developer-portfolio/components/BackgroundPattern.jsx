import React from 'react';

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-dots opacity-30"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-accent/20 rounded-lg rotate-12 animate-pulse animation-delay-200"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/5 rounded-full animate-pulse animation-delay-400"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-success/20 rounded-full rotate-45 animate-pulse animation-delay-600"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 border border-warning/20 rounded-lg -rotate-12 animate-pulse"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse animation-delay-200"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-success/10 to-accent/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
      
      {/* Code-like elements */}
      <div className="absolute top-32 right-10 text-xs font-mono text-text-secondary/20 transform rotate-12">
        <div>&lt;Developer /&gt;</div>
        <div className="mt-1">const skills = [];</div>
        <div className="mt-1">function build() {`{}`}</div>
      </div>
      
      <div className="absolute bottom-32 left-10 text-xs font-mono text-text-secondary/20 transform -rotate-12">
        <div>npm run dev</div>
        <div className="mt-1">✓ Ready in 2.3s</div>
        <div className="mt-1">Local: localhost:3000</div>
      </div>
    </div>
  );
};

export default BackgroundPattern;