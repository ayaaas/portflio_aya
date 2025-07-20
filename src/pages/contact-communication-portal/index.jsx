import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Icon from '../../components/AppIcon';


const ContactCommunicationPortal = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact - Anam Aya | Full Stack Developer</title>
        <meta 
          name="description" 
          content="Get in touch with Anam Aya for full-stack development projects, technical consultation, and collaboration opportunities. Based in Casablanca, Morocco." 
        />
        <meta name="keywords" content="contact developer, hire full stack developer, web development services, technical consultation, Casablanca developer" />
        <meta property="og:title" content="Contact - Anam Aya | Full Stack Developer" />
        <meta property="og:description" content="Ready to bring your project to life? Contact Anam Aya for professional web development services and technical consultation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://anamaya.dev/contact-communication-portal" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <ContactHero />
            </div>
          </section>

          {/* Contact Content */}
          <section className="pb-20 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Form - Takes 2 columns on large screens */}
                <div className="lg:col-span-2">
                  <ContactForm />
                </div>

                {/* Contact Information - Takes 1 column on large screens */}
                <div className="lg:col-span-1">
                  <ContactInfo />
                </div>
              </div>
            </div>
          </section>

          {/* Additional Information Section */}
          <section className="py-16 px-6 lg:px-8 bg-surface">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-primary mb-6">
                Why Work With Me?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Code" size={24} color="var(--color-accent)" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Full-Stack Expertise
                  </h3>
                  <p className="text-text-secondary text-sm">
                    End-to-end development with modern technologies and best practices
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Zap" size={24} color="var(--color-success)" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Efficient development process with regular updates and milestones
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-warning/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={24} color="var(--color-warning)" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Collaborative Approach
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Close communication and feedback integration throughout the project
                  </p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-card rounded-2xl border border-border shadow-soft">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Project Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                      1
                    </div>
                    <p className="font-medium text-primary">Discovery</p>
                    <p className="text-text-secondary mt-1">Understanding your needs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                      2
                    </div>
                    <p className="font-medium text-primary">Planning</p>
                    <p className="text-text-secondary mt-1">Architecture & timeline</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                      3
                    </div>
                    <p className="font-medium text-primary">Development</p>
                    <p className="text-text-secondary mt-1">Building with updates</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-semibold">
                      4
                    </div>
                    <p className="font-medium text-primary">Delivery</p>
                    <p className="text-text-secondary mt-1">Testing & deployment</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 lg:px-8 bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-sm opacity-80">
                © {new Date().getFullYear()} Anam Aya. All rights reserved. Built with React & Tailwind CSS.
              </p>
              <p className="text-xs opacity-60 mt-2">
                Based in Casablanca, Morocco • Available for global projects
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default ContactCommunicationPortal;