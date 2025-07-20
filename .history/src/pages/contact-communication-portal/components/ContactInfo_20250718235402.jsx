import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: 'Mail',
      label: 'Email',
      value: 'ayaaname0@gmail.com',
      action: () => window.location.href = 'mailto:ayaaname0@gmail.com'
    },
    {
      icon: 'MapPin',
      label: 'Location',
      value: 'Casablanca, Morocco',
      subValue: 'GMT+1 Timezone'
    },
    {
      icon: 'Clock',
      label: 'Response Time',
      value: 'Within 24 hours',
      subValue: 'Usually within 4-6 hours'
    },
    {
      icon: 'Calendar',
      label: 'Availability',
      value: 'Open to opportunities',
      subValue: 'Full-time & Freelance'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'Github',
      url: 'https://github.com/ayaaas',
      color: 'text-gray-700 hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://www.linkedin.com/in/aya-anam/',
      color: 'text-blue-600 hover:text-blue-700'
    }
   
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM GMT+1' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM GMT+1' },
    { day: 'Sunday', hours: 'Emergency projects only' }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Information Card */}
      <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-primary mb-2">
            Get In Touch
          </h3>
          <p className="text-text-secondary">
            Ready to discuss your project? I'm here to help bring your ideas to life.
          </p>
        </div>

        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={detail.icon} size={20} color="var(--color-accent)" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-text-secondary mb-1">
                  {detail.label}
                </p>
                <p 
                  className={`text-primary font-medium ${detail.action ? 'cursor-pointer hover:text-accent transition-colors' : ''}`}
                  onClick={detail.action}
                >
                  {detail.value}
                </p>
                {detail.subValue && (
                  <p className="text-sm text-text-secondary mt-1">
                    {detail.subValue}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links Card */}
      <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
        <h3 className="text-xl font-semibold text-primary mb-6">
          Connect With Me
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => window.open(social.url, '_blank')}
              iconName={social.icon}
              iconPosition="left"
              className="justify-start hover-lift"
            >
              {social.name}
            </Button>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-text-secondary">
            Follow my journey and stay updated with my latest projects and insights.
          </p>
        </div>
      </div>

      {/* Working Hours Card */}
      <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
        <h3 className="text-xl font-semibold text-primary mb-6">
          Working Hours
        </h3>
        
        <div className="space-y-4">
          {workingHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <span className="text-text-secondary font-medium">
                {schedule.day}
              </span>
              <span className="text-primary text-sm">
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center space-x-2 text-success">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Currently Available</span>
          </div>
          <p className="text-sm text-text-secondary mt-2">
            Accepting new projects and collaborations
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/20">
        <div className="text-center">
          <Icon name="Zap" size={32} color="var(--color-accent)" className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-3">
            Need Something Urgent?
          </h3>
          <p className="text-text-secondary mb-6">
            For time-sensitive projects or quick consultations, reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="default"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.location.href = 'tel:+212-6-XXXX'}
            >
              Schedule Call
            </Button>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.open('https://wa.me/212XXXXXXXX', '_blank')}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;