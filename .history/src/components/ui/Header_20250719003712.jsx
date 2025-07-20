import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/hero-section-developer-portfolio', icon: 'Home' },
    { name: 'About', path: '/about-me-personal-narrative', icon: 'User' },
    { name: 'Technologies', path: '/technologies-interactive-stack-showcase', icon: 'Code' },
    { name: 'Tools', path: '/tools-professional-workflow-display', icon: 'Settings' },
    { name: 'Projects', path: '/projects-curated-case-studies', icon: 'FolderOpen' },
    { name: 'Contact', path: '/contact-communication-portal', icon: 'Mail' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-soft' 
          : 'bg-background'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/hero-section-developer-portfolio" 
            className="flex items-center space-x-3 hover-lift"
            onClick={closeMenu}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg font-mono">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold text-primary tracking-tight">
                Anam Aya
              </h1>
              <p className="text-xs text-text-secondary font-mono">
                Full Stack Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all-300 hover-lift ${
                  isActivePath(item.path)
                    ? 'bg-accent text-accent-foreground shadow-soft'
                    : 'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Github"
              iconPosition="left"
              onClick={() => window.open('https://github.com/ayaaas', '_blank')}
              className="hover-lift"
            >
              GitHub
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Mail"
              iconPosition="left"
              onClick={() => window.location.href = 'mailto:ayaaname0@gmail.com'}
              className="hover-lift"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-muted transition-all-300"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-6 py-4 bg-surface border-t border-border">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all-300 ${
                    isActivePath(item.path)
                      ? 'bg-accent text-accent-foreground shadow-soft'
                      : 'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            
            {/* Mobile CTAs */}
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Button
                variant="outline"
                fullWidth
                iconName="Github"
                iconPosition="left"
                onClick={() => {
                  window.open('https://github.com', '_blank');
                  closeMenu();
                }}
              >
                View GitHub
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="Mail"
                iconPosition="left"
                onClick={() => {
                  window.location.href = 'mailto:anam@example.com';
                  closeMenu();
                }}
              >
                Get In Touch
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;