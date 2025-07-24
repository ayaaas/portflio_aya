import React from 'react';
import Image from '../../../components/AppImage';

const ProfileImage = () => {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] shadow-lg hover-lift mx-auto">

        <Image
          src="assets/images/whatsapp_image_2025_01_27_130923.jpg"
          alt="Anam Aya - Full Stack Developer in his development environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
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
