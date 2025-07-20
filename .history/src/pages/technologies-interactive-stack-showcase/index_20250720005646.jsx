import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CategoryNavigation from './components/CategoryNavigation';
import CategoryCarousel from './components/CategoryCarousel';
import TechnologyStats from './components/TechnologyStats';
import SkillProgressBar from './components/SkillProgressBar';
import Icon from '../../components/AppIcon';

const TechnologiesInteractiveStackShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: 'Monitor', count: 9 },
    { id: 'backend', name: 'Backend', icon: 'Server', count: 4 },
    { id: 'database', name: 'Database', icon: 'Database', count: 3 },
    { id: 'mobile', name: 'Mobile', icon: 'Smartphone', count: 4 },
    { id: 'cloud', name: 'DevOps', icon: 'Cloud', count: 3 }
  ];

  const technologies = {
    // ... your full technologies object (unchanged)
  };

  const technologyStats = [
    { icon: 'Code', value: '23', label: 'Technologies' },
    { icon: 'Calendar', value: '2', label: 'Years Experience' },
    { icon: 'Briefcase', value: '5', label: 'Projects Built' }
  ];

  const skillProgress = [
    { name: 'Frontend Development', percentage: 90 },
    { name: 'Backend Development', percentage: 80 },
    { name: 'Database Design', percentage: 75 },
    { name: 'Mobile Development', percentage: 70 }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <>
      <Helmet>
        <title>Technologies - Interactive Stack Showcase | Anam Aya Portfolio</title>
        <meta
          name="description"
          content="Explore Anam Aya's comprehensive technology expertise across Frontend, Backend, Database, Mobile, and DevOps. Interactive showcase of modern development stack with real-world experience."
        />
        <meta
          name="keywords"
          content="React, Next.js, Node.js, JavaScript, Flutter, Dart, MongoDB, PostgreSQL, Tailwind CSS, Full Stack Developer"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Icon name="Code" size={32} className="text-accent" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                Technology Stack
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                A comprehensive showcase of modern technologies and frameworks I use to build
                scalable, performant applications. From frontend interfaces to backend systems
                and mobile applications.
              </p>
            </div>

            {/* Technology Stats - slightly shifted left */}
            <div
              className={`flex justify-end max-w-md mr-10 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <TechnologyStats stats={technologyStats} />
            </div>
          </div>
        </section>

        {/* Interactive Technology Showcase */}
        <section className="py-16 px-6 lg:px-8 bg-surface">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <CategoryNavigation
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
              <div className="relative min-h-[600px]">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      activeCategory === category.id
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-8 pointer-events-none'
                    }`}
                  >
                    <CategoryCarousel
                      category={category}
                      technologies={technologies[category.id] || []}
                      isActive={activeCategory === category.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skill Proficiency Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">Skill Proficiency</h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  A breakdown of my expertise levels across different technology domains,
                  reflecting 2 years of hands-on experience and continuous learning.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl p-8 border border-border">
                  <h3 className="text-xl font-semibold text-text-primary mb-6">Core Competencies</h3>
                  {skillProgress.map((skill, index) => (
                    <SkillProgressBar key={skill.name} skill={skill} delay={index * 200} />
                  ))}
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h3 className="text-xl font-semibold text-text-primary mb-6">Learning Journey</h3>
                  <div className="space-y-6">
                    {/* Learning Journey Items (unchanged) */}
                    {/* ... */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's discuss how these technologies can be leveraged to bring your project to life.
                I'm always excited to work on challenging problems with modern solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => (window.location.href = '/projects-curated-case-studies')}
                  className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all-300 hover-lift flex items-center justify-center space-x-2"
                >
                  <Icon name="FolderOpen" size={20} />
                  <span>View Projects</span>
                </button>
                <button
                  onClick={() => (window.location.href = '/contact-communication-portal')}
                  className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all-300 hover-lift flex items-center justify-center space-x-2"
                >
                  <Icon name="Mail" size={20} />
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TechnologiesInteractiveStackShowcase;
