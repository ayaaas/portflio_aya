import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProfileImage from './components/ProfileImage';
import HeroContent from './components/HeroContent';
import BackgroundPattern from './components/BackgroundPattern';
import ScrollIndicator from './components/ScrollIndicator';

const HeroSectionDeveloperPortfolio = () => {
  useEffect(() => {
    // Add fade-in animation to main content
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 200);
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Anam Aya - Full Stack Developer | MERN & PERN Specialist</title>
        <meta name="description" content="Full-stack developer specializing in MERN and PERN stacks. Building scalable solutions with modern technology. Based in Casablanca, serving clients globally." />
        <meta name="keywords" content="full stack developer, MERN stack, PERN stack, React, Node.js, JavaScript, web development, Casablanca" />
        <meta property="og:title" content="Anam Aya - Full Stack Developer" />
        <meta property="og:description" content="Building scalable solutions with modern technology stacks" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/hero-section-developer-portfolio" />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Background Pattern */}
        <BackgroundPattern />
        
        {/* Main Hero Section */}
        <main className="relative z-10 min-h-screen flex items-center pb-10">

          <div className="w-full px-6 lg:px-8 pt-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Content */}
                <div className="order-2 lg:order-1 fade-in">
                  <HeroContent />
                </div>
                
                {/* Right Column - Profile Image */}
                <div className="order-1 lg:order-2 fade-in">
                  <ProfileImage />
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Scroll Indicator */}
        <ScrollIndicator />
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      </div>
    </>
  );
};

export default HeroSectionDeveloperPortfolio;
