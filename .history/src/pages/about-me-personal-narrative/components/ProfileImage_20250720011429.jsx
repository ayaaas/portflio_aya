import React from 'react';
import Image from '../../../components/AppImage';

const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover-lift">
        <Image
          src="public/assets/images/WhatsApp Image 2025-01-27 à 13.09.23_03e1ada6.jpg"
          alt="Anam Aya - Full Stack Developer in his development environment"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Floating Badge */}
      <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg">
        <span className="text-sm font-medium">Available for Projects</span>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/10 rounded-full"></div>
      <div className="absolute top-8 -right-2 w-4 h-4 bg-accent/20 rounded-full"></div>
    </div>
  );
};

export default ProfileImage;