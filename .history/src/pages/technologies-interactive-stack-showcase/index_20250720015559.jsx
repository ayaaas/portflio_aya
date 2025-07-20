import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CategoryNavigation from './components/CategoryNavigation';
import CategoryCarousel from './components/CategoryCarousel';
import TechnologyStats from './components/TechnologyStats';
import SkillProgressBar from './components/SkillProgressBar';

// Default generic icon as fallback
const DefaultIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12" y2="16" />
  </svg>
);

// Custom SVG icons

const FlowerIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" >
    <path d="M12 2C10 5 7 7 5 12c2 5 5 7 7 10 2-3 5-5 7-10-2-5-5-7-7-10z" />
  </svg>
);

const WhaleIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" >
    <path d="M2 12c3-4 9-4 12-1 0 0 3-5 7-5v6c-4 0-6 3-6 3-3 0-8 1-13-3z" />
  </svg>
);

const ButterflyIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" >
    <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" />
  </svg>
);

const AtomIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M16.24 7.76a6 6 0 0 1 0 8.48M7.76 16.24a6 6 0 0 1 0-8.48" />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
  </svg>
);

const WindIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 12a5.5 5.5 0 0 0-11 0" />
    <path d="M12 7v1M12 16v1" />
  </svg>
);

const ZapIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const CoffeeIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
  </svg>
);

// Map technology name or icon keyword to custom icon component
const customIcons = {
  DaisyUI: FlowerIcon,
  Docker: WhaleIcon,
  Flutter: ButterflyIcon,
  React: AtomIcon,
  'Tailwind CSS': WindIcon,
  Nextjs: ZapIcon,
  Next: ZapIcon,
  Expressjs: ZapIcon,
  Express: ZapIcon,
  Java: CoffeeIcon,
};

// Fallback generic icon name mapping for your existing icons if you want to keep using the Icon component
const fallbackIconMapping = {
  Monitor: 'Monitor',
  Server: 'Server',
  Database: 'Database',
  Smartphone: 'Smartphone',
  Cloud: 'Cloud',
  Package: 'Package',
  GitBranch: 'GitBranch',
  Code: 'Code',
  FileText: 'FileText',
  Layout: 'Layout',
  Palette: 'Palette',
  Zap: 'Zap',
  Coffee: 'Coffee',
  Volume2: 'Volume2',
  BookOpen: 'BookOpen',
  Target: 'Target',
  Mail: 'Mail',
  FolderOpen: 'FolderOpen',
  Calendar: 'Calendar',
  Briefcase: 'Briefcase',
  // add more if needed
};

// The Icon wrapper chooses the right icon component to render
const Icon = ({ name, size = 24, className = '' }) => {
  // If custom icon exists for name, use it
  if (customIcons[name]) {
    const CustomIconComp = customIcons[name];
    return <CustomIconComp className={`${className} w-${size} h-${size}`} />;
  }
  // Otherwise fallback to default Icon or generic
  // Here you can replace with your actual icon system if you have one.
  return (
    <DefaultIcon className={`${className} w-${size} h-${size}`} />
  );
};

const TechnologiesInteractiveStackShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: 'frontend', name: 'Frontend', icon: 'Monitor', count: 9 },
    { id: 'backend', name: 'Backend', icon: 'Server', count: 4 },
    { id: 'database', name: 'Database', icon: 'Database', count: 4 },
    { id: 'mobile', name: 'Mobile', icon: 'Smartphone', count: 3 },
    { id: 'cloud', name: 'DevOps', icon: 'Cloud', count: 3 }
  ];

  const technologies = {
    frontend: [
      {
        id: 1,
        name: 'React',
        icon: 'React',
        experience: '2+ years',
        description: 'Building dynamic user interfaces with hooks, context, and modern patterns. Extensive experience with component architecture and state management.'
      },
      {
        id: 2,
        name: 'Next.js',
        icon: 'Zap',
        experience: '1+ years',
        description: 'Full-stack React framework for production applications. Server-side rendering, API routes, and optimized performance.'
      },
      {
        id: 3,
        name: 'JavaScript',
        icon: 'FileText',
        experience: '2+ years',
        description: 'Modern ES6+ JavaScript with deep understanding of async programming, closures, and functional programming concepts.'
      },
      {
        id: 4,
        name: 'HTML5',
        icon: 'Layout',
        experience: '2+ years',
        description: 'Semantic markup, accessibility standards, and modern HTML5 APIs for progressive web applications.'
      },
      {
        id: 5,
        name: 'CSS3',
        icon: 'Palette',
        experience: '2+ years',
        description: 'Advanced styling with Flexbox, Grid, animations, and responsive design. Experience with modern CSS frameworks.'
      },
      {
        id: 6,
        name: 'Tailwind CSS',
        icon: 'Tailwind CSS',
        experience: '2+ years',
        description: 'Utility-first CSS framework for rapid UI development with consistent design systems and responsive layouts.'
      },
      {
        id: 7,
        name: 'Bootstrap',
        icon: 'Layout',
        experience: '1+ years',
        description: 'Popular CSS framework for responsive and mobile-first web development with pre-built components.'
      },
      {
        id: 8,
        name: 'DaisyUI',
        icon: 'DaisyUI',
        experience: '1+ years',
        description: 'Tailwind CSS component library providing semantic class names and beautiful UI components.'
      },
      {
        id: 9,
        name: 'CoreUI',
        icon: 'Layout',
        experience: '1+ years',
        description: 'Bootstrap-based admin template and UI components for building responsive web applications.'
      }
    ],
    backend: [
      {
        id: 10,
        name: 'Node.js',
        icon: 'Server',
        experience: '2+ years',
        description: 'Server-side JavaScript runtime for building scalable network applications. Experience with Express.js and microservices architecture.'
      },
      {
        id: 11,
        name: 'Express.js',
        icon: 'Zap',
        experience: '2+ years',
        description: 'Fast, unopinionated web framework for Node.js. RESTful APIs, middleware, and authentication systems.'
      },
      {
        id: 12,
        name: 'Java',
        icon: 'Java',
        experience: '1+ years',
        description: 'Object-oriented programming with Spring Boot framework. Enterprise-level applications and microservices development.'
      },
      {
        id: 13,
        name: 'PHP',
        icon: 'Code',
        experience: '1+ years',
        description: 'Server-side scripting for web development. Experience with Laravel framework and modern PHP practices.'
      }
    ],
    database: [
      {
        id: 14,
        name: 'MongoDB',
        icon: 'Database',
        experience: '2+ years',
        description: 'NoSQL document database for flexible, scalable applications. Aggregation pipelines and performance optimization.'
      },
      {
        id: 15,
        name: 'PostgreSQL',
        icon: 'Database',
        experience: '1+ years',
        description: 'Advanced relational database with complex queries, indexing, and performance tuning for enterprise applications.'
      },
      {
        id: 16,
        name: 'MySQL',
        icon: 'Database',
        experience: '1+ years',
        description: 'Relational database management with stored procedures, triggers, and optimization for web applications.'
      },
      {
        id: 19,
        name: 'SQFLite',
        icon: 'Database',
        experience: '1+ years',
        description: 'SQLite plugin for Flutter applications. Local database storage for offline functionality and data persistence.'
      }
    ],
    mobile: [
      {
        id: 17,
        name: 'Flutter',
        icon: 'Flutter',
        experience: '1+ years',
        description: 'Cross-platform mobile development framework. Building native-quality apps for iOS and Android with single codebase.'
      },
      {
        id: 18,
        name: 'Dart',
        icon: 'Code',
        experience: '1+ years',
        description: 'Programming language for Flutter development. Object-oriented language with strong typing and modern features.'
      },
      {
        id: 20,
        name: 'Audioplayers',
        icon: 'Volume2',
        experience: '1+ years',
        description: 'Flutter audio plugin for music and sound playback. Supporting multiple audio formats and background playback.'
      }
    ],
    cloud: [
      {
        id: 21,
        name: 'DevOps',
        icon: 'Cloud',
        experience: '1+ years',
        description: 'General knowledge of DevOps practices, and deployment strategies for modern applications.'
      },
      {
        id: 22,
        name: 'Docker',
        icon: 'Docker',
        experience: '1+ years',
        description: 'Containerization for consistent development and deployment environments. Docker Compose and multi-stage builds.'
      },
      {
        id: 23,
        name: 'Git',
        icon: 'GitBranch',
        experience: '2+ years',
        description: 'Version control with branching strategies, collaborative workflows, and CI/CD integration for team development.'
      }
    ]
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

            {/* Technology Stats */}
            <div
              className={`transition-all duration-1000 delay-200 ${
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
              {/* Category Navigation */}
              <CategoryNavigation
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />

              {/* Technology Carousel */}
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
                  A breakdown of my expertise levels across different technology domains, reflecting 2 years of hands-on experience and continuous learning.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl p-8 border border-border">
                  <h3 className="text-xl font-semibold text-text-primary mb-6">Core Competencies</h3>
                  {skillProgress.map((skill, index) => (
                    <SkillProgressBar key={skill.name} skill={skill} delay={index * 200} />
                  ))}
                </div>

                <div className="bg-card rounded-xl p-8 border border-border flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-text-primary mb-6">Focus Areas</h3>
                  <ul className="list-disc list-inside text-text-secondary space-y-3">
                    <li>Building scalable, maintainable frontend interfaces.</li>
                    <li>Designing RESTful and GraphQL backend APIs.</li>
                    <li>Managing data with relational and NoSQL databases.</li>
                    <li>Developing cross-platform mobile applications.</li>
                    <li>Deploying and maintaining applications with Docker and Git workflows.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TechnologiesInteractiveStackShowcase;
