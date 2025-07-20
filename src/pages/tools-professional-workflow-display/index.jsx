import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import CategorySection from './components/CategorySection';
import StatsOverview from './components/StatsOverview';
import WorkflowVisualization from './components/WorkflowVisualization';

const ToolsPage = () => {
  const toolCategories = [
    {
      id: 1,
      name: "API Development & Testing",
      description: "Tools for building, testing, and documenting APIs",
      icon: "Globe",
      tools: [
        {
          id: 1,
          name: "Postman",
          icon: "Send",
          description: "Comprehensive API development and testing platform for REST and GraphQL APIs.",
          useCase: "Used for testing all API endpoints, creating automated test suites, and generating API documentation for team collaboration."
        },
        {
          id: 2,
          name: "Swagger/OpenAPI",
          icon: "FileText",
          description: "API documentation and design-first development framework.",
          useCase: "Creating interactive API documentation and ensuring consistent API design patterns across projects."
        },
        {
          id: 3,
          name: "Insomnia",
          icon: "Zap",
          description: "Lightweight REST and GraphQL client for API testing and debugging.",
          useCase: "Quick API testing during development and debugging complex GraphQL queries."
        },
        {
          id: 4,
          name: "Thunder Client",
          icon: "Cloud",
          description: "VS Code extension for API testing directly within the editor.",
          useCase: "Seamless API testing without leaving the development environment."
        }
      ]
    },
    {
      id: 2,
      name: "Code Quality & Analysis",
      description: "Tools ensuring code quality, security, and maintainability",
      icon: "Shield",
      tools: [
        {
          id: 5,
          name: "SonarQube",
          icon: "Search",
          description: "Continuous code quality inspection platform for detecting bugs and security vulnerabilities.",
          useCase: "Automated code review for maintaining high code quality standards and identifying potential security issues."
        },
        {
          id: 6,
          name: "ESLint",
          icon: "AlertTriangle",
          description: "JavaScript linting utility for identifying and fixing code problems.",
          useCase: "Enforcing consistent coding standards and catching errors before runtime."
        },
        {
          id: 7,
          name: "Prettier",
          icon: "Paintbrush",
          description: "Opinionated code formatter supporting multiple languages.",
          useCase: "Automatic code formatting to maintain consistent style across team projects."
        }
      ]
    },
    {
      id: 3,
      name: "Version Control & Collaboration",
      description: "Tools for source code management and team collaboration",
      icon: "GitBranch",
      tools: [
        {
          id: 9,
          name: "Git",
          icon: "GitBranch",
          description: "Distributed version control system for tracking code changes.",
          useCase: "Managing code versions, branching strategies, and collaborative development workflows."
        },
        {
          id: 10,
          name: "GitHub",
          icon: "Github",
          description: "Web-based Git repository hosting with collaboration features.",
          useCase: "Code hosting, pull request reviews, issue tracking, and CI/CD pipeline management."
        },
        {
          id: 11,
          name: "GitLab",
          icon: "GitBranch",
          description: "Complete DevOps platform with integrated CI/CD capabilities.",
          useCase: "Enterprise-level project management with built-in deployment pipelines."
        }
      ]
    },
    {
      id: 4,
      name: "Design & Prototyping",
      description: "Tools for UI/UX design and rapid prototyping",
      icon: "Palette",
      tools: [
        {
          id: 13,
          name: "Figma",
          icon: "Figma",
          description: "Collaborative interface design tool with real-time collaboration.",
          useCase: "Creating high-fidelity mockups, design systems, and collaborating with design teams."
        },
        {
          id: 14,
          name: "Canva",
          icon: "Image",
          description: "Graphic design platform for creating visual content.",
          useCase: "Quick creation of marketing materials, presentations, and social media graphics."
        },
        {
          id: 15,
          name: "Sketch",
          icon: "PenTool",
          description: "Digital design toolkit focused on user interface design.",
          useCase: "Creating detailed UI components and design specifications for development."
        }
      ]
    },
    {
      id: 5,
      name: "Project Management",
      description: "Tools for organizing tasks, tracking progress, and team coordination",
      icon: "Kanban",
      tools: [
        {
          id: 16,
          name: "Jira",
          icon: "Layers",
          description: "Agile project management tool for tracking issues and sprints.",
          useCase: "Managing development sprints, bug tracking, and agile workflow coordination."
        },
        {
          id: 17,
          name: "Trello",
          icon: "Trello",
          description: "Kanban-style project management with card-based organization.",
          useCase: "Visual task management and simple project tracking for small teams."
        },
        {
          id: 18,
          name: "Notion",
          icon: "FileText",
          description: "All-in-one workspace for notes, tasks, and project documentation.",
          useCase: "Comprehensive project documentation, meeting notes, and knowledge management."
        }
      ]
    }
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Add fade-in animation to elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                <Icon name="Wrench" size={32} className="text-accent-foreground" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
              Professional Workflow Display
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of industry-standard development tools that power modern software engineering workflows. 
              From API development to deployment, these tools ensure quality, efficiency, and collaboration at every stage.
            </p>
          </div>

          {/* Stats Overview */}
          <StatsOverview />

          {/* Workflow Visualization */}
          <WorkflowVisualization />

          {/* Tool Categories */}
          <div className="space-y-16">
            {toolCategories.map((category, index) => (
              <CategorySection 
                key={category.id} 
                category={category} 
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 fade-in">
            <div className="bg-surface rounded-2xl p-12 border border-border">
              <div className="max-w-2xl mx-auto">
                <Icon name="Rocket" size={48} className="text-accent mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-blue-600 mb-4">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-text-secondary mb-8 text-lg">
                  With this comprehensive toolkit and proven workflow, I'm equipped to deliver 
                  high-quality solutions that meet enterprise standards and exceed expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/projects-curated-case-studies"
                    className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover-lift transition-all-300"
                  >
                    <Icon name="FolderOpen" size={20} className="mr-2" />
                    View My Projects
                  </a>
                  <a 
                    href="/contact-communication-portal"
                    className="inline-flex items-center justify-center px-8 py-3 border border-border text-text-primary rounded-lg font-semibold hover:bg-muted transition-all-300"
                  >
                    <Icon name="Mail" size={20} className="mr-2" />
                    Let's Collaborate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg font-mono">A</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">Anam Aya</h3>
                <p className="text-sm text-text-secondary">Full Stack Developer</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-text-secondary">
                © {new Date().getFullYear()} Anam Aya. Crafted with modern tools and best practices.
              </p>
              <p className="text-xs text-text-secondary mt-1">
                Casablanca, Morocco • Available for global opportunities
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ToolsPage;