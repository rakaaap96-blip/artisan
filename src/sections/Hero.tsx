// sections/Hero.tsx (optimized version)
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaStar, FaPlay, FaPause } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  const heroImages = [
    {
      src: '/images/ArtisanVase.webp',
      alt: 'Handmade ceramic vase with intricate artisan patterns',
      width: 800,
      height: 600
    },
    {
      src: '/images/ArtisanMug.webp',
      alt: 'Artisan handmade coffee mug with unique ceramic design', 
      width: 800,
      height: 600
    },
    {
      src: '/images/ArtisanBowl.webp',
      alt: 'Handcrafted wooden bowl with smooth finish',
      width: 800,
      height: 600
    },
    {
      src: '/images/ArtisanPlate.webp',
      alt: 'Hand-painted ceramic plate with artistic designs',
      width: 800,
      height: 600
    }
  ];

  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('products')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const toggleCarousel = () => {
    setIsPlaying(prev => !prev);
  };

  // Hapus fungsi handleDotClick karena dot sekarang non-clickable

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, heroImages.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-6">
              {/* Badge */}
              <div 
                className={`inline-flex items-center px-4 py-2 rounded-full font-medium animate-pulse mx-auto lg:mx-0 justify-center ${
                  isDark 
                    ? 'bg-orange-800 text-orange-100 border border-orange-600' 
                    : 'bg-orange-100 text-orange-800'
                }`}
              >
                <FaStar className="mr-2 motion-safe:animate-spin motion-safe:[animation-duration:3s]" />
                <span className="bg-linear-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                  Premium Handmade Crafts
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-4 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className={`block ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Discover Unique
                  </span>
                  <span className="block bg-linear-to-r from-orange-700 to-red-700 bg-clip-text text-transparent">
                    Artisan Treasures
                  </span>
                </h1>
                <p className="text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 text-gray-800 dark:text-gray-200">
                  Each piece tells a story. Shop our curated collection of handmade crafts 
                  and bring authentic artistry into your home.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToProducts}
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-orange-700 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 min-h-12 min-w-11"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Collection
                    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-orange-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>

                <button 
                  onClick={toggleCarousel}
                  className={`group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl border-2 transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 min-h-12 min-w-11 ${
                    isDark
                      ? 'text-gray-100 bg-gray-800 border-gray-600 hover:border-orange-500'
                      : 'text-gray-800 bg-white border-gray-400 hover:border-orange-500'
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    {isPlaying ? (
                      <>
                        <FaPause className="mr-2" />
                        Pause Story
                      </>
                    ) : (
                      <>
                        <FaPlay className="mr-2" />
                        Play Story
                      </>
                    )}
                  </span>
                  <div className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    isDark ? 'bg-orange-900/30' : 'bg-orange-50'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Image Container */}
            <div 
              className={`relative z-10 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 group ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={`w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl transition-all duration-1000 ${
                      index === currentImageIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105 absolute top-0'
                    }`}
                    aria-hidden={index !== currentImageIndex}
                  />
                ))}
                
                {/* Image Navigation Dots - NON-CLICKABLE (UI Only) */}
                <div 
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3"
                  aria-label="Image gallery progress indicator"
                  role="status"
                >
                  {heroImages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-orange-700 scale-125'
                          : isDark ? 'bg-gray-400' : 'bg-gray-400'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Play/Pause Button - IMPROVED TOUCH TARGET */}
                <button
                  onClick={toggleCarousel}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-12 h-12 bg-gray-900/90 text-white rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-gray-900 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 min-h-12 min-w-12"
                  aria-label={isPlaying ? 'Pause image slideshow' : 'Play image slideshow'}
                >
                  {isPlaying ? (
                    <FaPause size={18} />
                  ) : (
                    <FaPlay size={18} className="ml-0.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Background Decorative Element */}
            <div 
              className={`absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-full h-full rounded-3xl -rotate-2 sm:-rotate-3 animate-pulse -z-10 ${
                isDark 
                  ? 'bg-linear-to-br from-orange-900/30 to-red-900/30' 
                  : 'bg-linear-to-br from-orange-200 to-red-200'
              }`}
            />
            
            {/* Floating Discount Element */}
            <div
              className={`absolute -bottom-2 -right-2 sm:bottom-2 sm:right-4 lg:-bottom-4 lg:-right-4 p-4 sm:p-4 lg:p-6 rounded-2xl shadow-2xl animate-bounce group hover:animate-none z-20 ${
                isDark ? 'bg-orange-700 border border-orange-600' : 'bg-orange-700 border border-orange-600'
              }`}
            >
              <div className="text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
                  50% OFF
                </div>
                <div className="text-xs sm:text-sm text-white font-medium mt-1">
                  First Order
                </div>
                <div className="w-8 sm:w-10 lg:w-12 h-1 bg-white mx-auto mt-2 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 sm:mt-16 animate-bounce">
          <button
            onClick={scrollToProducts}
            className="flex flex-col items-center text-gray-700 dark:text-gray-200 hover:text-orange-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 rounded-lg p-2 min-h-12 min-w-11"
            aria-label="Scroll to products section"
          >
            <span className="text-sm mb-2 font-medium">Scroll to Explore</span>
            <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
              isDark ? 'border-gray-400' : 'border-gray-500'
            }`}>
              <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
                isDark ? 'bg-gray-300' : 'bg-gray-600'
              }`} />
            </div>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div 
        className={`absolute top-10 left-4 sm:top-20 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full blur-xl opacity-50 motion-safe:animate-bounce -z-10 ${
          isDark ? 'bg-orange-900/30' : 'bg-orange-200'
        }`}
      />
      <div 
        className={`absolute top-20 right-8 sm:top-40 sm:right-20 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full blur-xl opacity-50 motion-safe:animate-bounce motion-safe:[animation-delay:1s] -z-10 ${
          isDark ? 'bg-red-900/30' : 'bg-red-200'
        }`}
      />
      <div 
        className={`absolute bottom-10 left-8 sm:bottom-20 sm:left-1/4 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full blur-xl opacity-50 motion-safe:animate-bounce motion-safe:[animation-delay:2s] -z-10 ${
          isDark ? 'bg-yellow-900/30' : 'bg-yellow-200'
        }`}
      />
    </section>
  );
};

export default Hero;