'use client';

import { useEffect, useState } from 'react';
import HeroHeader from './HeroHeader';
import PersonalStory from './PersonalStory';
import ProfileImage from './ProfileImage';
import TechnologyStats from './TechnologyStats';
import { technologyStats } from './data';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container py-24 grid gap-12">
      {/* Header */}
      <HeroHeader />

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Profile Image */}
        <div className="order-2 lg:order-1 -mt-6">
          <ProfileImage />
        </div>

        {/* Personal Story */}
        <div className="order-1 lg:order-2">
          <PersonalStory />
        </div>
      </div>

      {/* Technology Stats */}
      <div
        className={`flex justify-end pr-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <TechnologyStats stats={technologyStats} />
      </div>
    </section>
  );
}
