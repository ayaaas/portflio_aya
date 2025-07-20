import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import TechnologyCard from './TechnologyCard';

const CategoryCarousel = ({ category, technologies, isActive }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [technologies]);

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.children[0]?.offsetWidth || 0;
      const gap = 24; // 1.5rem gap
      const scrollPosition = index * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const maxIndex = technologies.length - 1;
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  const handleScroll = () => {
    checkScrollButtons();
  };

  return (
    <div className={`transition-all-300 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Category Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name={category.icon} size={24} className="text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-text-primary">
              {category.name}
            </h2>
            <p className="text-text-secondary">
              {technologies.length} technologies
            </p>
          </div>
        </div>

        {/* Desktop Navigation Controls */}
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-lg border transition-all-300 flex items-center justify-center ${
              canScrollLeft
                ? 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                : 'border-border text-text-secondary cursor-not-allowed'
            }`}
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-lg border transition-all-300 flex items-center justify-center ${
              canScrollRight
                ? 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                : 'border-border text-text-secondary cursor-not-allowed'
            }`}
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>

      {/* Technologies Carousel */}
      <div className="relative">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {technologies.map((technology, index) => (
            <div
              key={technology.id}
              className="flex-shrink-0 w-80 sm:w-72 md:w-80"
            >
              <TechnologyCard
                technology={technology}
                isActive={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              />
            </div>
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all-300 ${
                  index === currentIndex
                    ? 'bg-accent w-6' :'bg-border hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;