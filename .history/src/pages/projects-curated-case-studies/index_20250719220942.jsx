import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import ProjectFilter from './components/ProjectFilter';
import ProjectStats from './components/ProjectStats';

const ProjectsCuratedCaseStudies = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Real project data - only 6 projects as per user's actual work
  const projects = [
    {
      id: 1,
      title: " Reservation Platform",
      category: "Web Application", 
      description: "A comprehensive reservation platform  with booking management, user authentication, and real-time availability tracking.",
      detailedDescription: " Reservation Platform is a full-stack web application designed to streamline the booking process for ANP services. Features include user authentication, real-time availability checking, booking management, and automated confirmation systems.",
      image: "public/assets/images/images.jpg",
      additionalImages: [
        "public/assets/images/téléchargement.png"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
      keyFeatures: [
        "User authentication and authorization",
        "Real-time booking availability",
        "Automated confirmation system",
        "Booking management dashboard",
        "Responsive design",
        
      ],
      
      
    },
    {
      id: 2,
      title: "UEvent - Agency Services Platform",
      category: "Service Platform",
      description: "Curated list of agencies with transparent pricing, verified providers, and detailed cost breakdowns to avoid hidden fees.",
      detailedDescription: "UEvent is a B2C service platform connecting clients with verified agencies. Features transparent pricing with detailed cost breakdowns, verified provider listings, and a dedicated platform for agencies to showcase their work and attract potential clients.",
      image: "public/assets/images/accueil_event.png",
      additionalImages: [
        "public/assets/images/contact.png",
        "public/assets/images/loginevent.png",
        "public/assets/images/payement.png",
        "public/assets/images/Capture d’écran 2025-07-19 011956.png",
        "public/assets/images/payement 2.png",
        "public/assets/images/profile.png",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Tailwind CSS"],
      keyFeatures: [
        "Curated list of verified agencies",
        "Transparent pricing structure",
        "Detailed cost breakdowns",
        "Agency portfolio showcase",
        "Client review system",
        "Secure payment processing",
        "Enhanced client acquisition tools",
        "Reputation management system"
      ],
  
      
    },
    {
      id: 3,
      title: "Marketplace Backend",
      category: "Backend System",
      description: "Robust backend system for marketplace applications with user management, product catalog, and order processing capabilities.",
      detailedDescription: "A comprehensive backend system designed for marketplace applications. Features include user authentication, product management, order processing, payment integration, and real-time notifications.",
      image: "",
      additionalImages: [
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Stripe API", "Socket.io"],
      keyFeatures: [
        "RESTful API architecture",
        "User authentication system",
        "Product catalog management",
        "Order processing system",
        "Payment integration",
        "Real-time notifications",
        "Database optimization",
        "Security middleware"
      ],

    },
    {
      id: 4,
      title: "Abstract Palette",
      category: "Creative Tool",
      description: "Digital art and color palette generation tool for designers and artists to create and manage color schemes.",
      detailedDescription: "Abstract Palette is a creative tool designed for digital artists and designers. It provides advanced color palette generation, color harmony analysis, and palette management features.",
      image: "public/assets/images/Capture d'écran 2025-04-16 030157.png",
      additionalImages: [
        "public/assets/images/Capture d'écran 2025-04-16 030453.png",
      ],
      technologies: ["React", "Canvas API", "Color Theory Algorithms", "Local Storage", "CSS3"],
      keyFeatures: [
        "Color palette generation",
        "Color harmony analysis",
        "Palette export functionality",
        "Color accessibility checker",
        "Gradient generator",
        "Color picker tools",
        "Save and organize palettes",
        "Mobile-responsive design"
      ],

    },

    {
      id: 6,
      title: "Music Appl - Flutter Music Streaming App",
      category: "Mobile App",
      description: "Flutter mobile music streaming app with personalized recommendations, offline storage, and seamless audio playback.",
      detailedDescription: "Music Appl is a Flutter mobile music streaming app designed for personalized listening experiences. Features include favorite mechanism, recommendation system based on genres, navigation drawer, light/dark themes, SQFLite for offline storage, and audioplayers for seamless playback.",
      image: "public/assets/images/Capture d’écran 2025-01-12 221017.png",
      additionalImages: [
        
      ],
      technologies: ["Flutter", "Dart", "SQFLite", "Audioplayers", "Material Design"],
      keyFeatures: [
        "Favorite songs mechanism",
        "Genre-based recommendations",
        "Navigation drawer interface",
        "Light and dark themes",
        "Offline music storage with SQFLite",
        "Seamless audio playback",
        "Play, pause, stop controls",
        "Background audio playback",
        "Multiple audio format support",
        "Playlist creation (in development)",
        "User login system (planned)",
        "Social sharing (planned)"
      ],

    }
  ];

  // Project statistics - updated to reflect actual 6 projects
  const projectStats = [
    { icon: "Code", value: "5", label: "Projects Completed" },
    { icon: "Clock", value: "2", label: "Years Experience" }


  ];

  // Get unique categories
  const categories = [...new Set(projects.map(project => project.category))];

  // Filter projects based on active category
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  // Auto-scroll projects every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
              Curated Case Studies
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of 5 real applications that demonstrate technical expertise, 
              problem-solving capabilities, and real-world impact across diverse domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProjectStats stats={projectStats} />
          </motion.div>
        </div>
      </section>

      {/* Project Filter */}
      <section className="pb-8 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  onViewDetails={handleViewDetails}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with modern technology 
              and thoughtful design. I'm always excited to work on challenging projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/contact-communication-portal'}
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover-lift transition-all-300 flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
              </button>
              <button
                onClick={() => window.open('https://github.com/anamaya', '_blank')}
                className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover-lift transition-all-300 flex items-center justify-center space-x-2"
              >
                <span>View All Projects</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectsCuratedCaseStudies;