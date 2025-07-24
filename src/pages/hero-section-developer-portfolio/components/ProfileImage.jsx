import React from 'react';
import Image from '../../../components/AppImage';

const ProfileImage = () => {
  return (
    <div className="relative">
      {/* Main profile image container */}
      <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl transform scale-110"></div>
        
        {/* Profile image */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl hover-lift">
          <Image
            src="assets/images/whatsapp_image_2025_01_27_130923.jpg"
            alt="Anam Aya - Full Stack Developer"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating accent elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-success rounded-full opacity-60 animate-pulse animation-delay-400"></div>
        <div className="absolute top-1/4 -left-8 w-4 h-4 bg-warning rounded-full opacity-70 animate-pulse animation-delay-600"></div>
      </div>
      
      {/* Status indicator */}
      <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center space-x-2">
        <div className="w-2 h-2 bg-success-foreground rounded-full animate-pulse"></div>
        <span>Available for Projects</span>
      </div>
    </div>
  );
};

export default ProfileImage;
