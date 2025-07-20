import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProfileImage from './components/ProfileImage';
import PersonalStory from './components/PersonalStory';
import SkillsOverview from './components/SkillsOverview';
import PersonalValues from './components/PersonalValues';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const AboutMePersonalNarrative = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in', 'visible');
        }
      });
    }, observerOptions);

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      <Helmet>
        <title>About Me - Anam Aya | Full Stack Developer Portfolio</title>
        <meta 
          name="description" 
          content="Learn about Anam Aya, a passionate full-stack developer from Casablanca, Morocco. Discover my journey, values, and expertise in modern web development technologies." 
        />
        <meta name="keywords" content="Anam Aya, Full Stack Developer, Casablanca, Morocco, React, Node.js, Software Development, Web Developer" />
        <meta property="og:title" content="About Me - Anam Aya | Full Stack Developer" />
        <meta property="og:description" content="Passionate full-stack developer bringing global technology standards to emerging markets. Based in Casablanca, Morocco." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-me-personal-narrative" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section 
            ref={addToRefs}
            className="fade-in py-16 lg:py-24 bg-gradient-to-br from-background via-surface to-muted"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                  About Me
                </h1>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                  Passionate full-stack developer bringing global technology standards to emerging markets. Based in Casablanca, Morocco.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Profile Image */}
               

                {/* Personal Story */}
                <div className="order-1 lg:order-2">
                  <PersonalStory />
                </div>
              </div>
            </div>
          </section>

          {/* Skills Overview Section */}
          <section 
            ref={addToRefs}
            className="fade-in py-16 lg:py-24 bg-background"
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <SkillsOverview />
            </div>
          </section>

          {/* Personal Values Section */}
          <section 
            ref={addToRefs}
            className="fade-in py-16 lg:py-24 bg-surface"
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <PersonalValues />
            </div>
          </section>

          {/* Call to Action Section */}
          <section 
            ref={addToRefs}
            className="fade-in py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-accent/5"
          >
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-blue-600">
                    Let's Build Something Amazing Together
                  </h2>
                  <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                    Ready to bring your ideas to life? I'm always excited to work on new projects 
                    and collaborate with teams that value quality and innovation.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Mail"
                    iconPosition="left"
                    onClick={() => window.location.href = 'mailto:ayaaname0@gmail.com'}
                    className="hover-lift"
                  >
                    Start a Conversation
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="FolderOpen"
                    iconPosition="left"
                    onClick={() => window.location.href = '/projects-curated-case-studies'}
                    className="hover-lift"
                  >
                    View My Work
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-border">
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
                    <span className="text-sm">GMT+1 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutMePersonalNarrative;