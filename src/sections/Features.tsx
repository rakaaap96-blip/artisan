// sections/Features.tsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  FaShippingFast, 
  FaHandHoldingHeart, 
  FaRecycle, 
  FaAward, 
  FaStar, 
  FaHeart, 
  FaLeaf, 
  FaRocket,
  FaGem
} from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Features: React.FC = React.memo(() => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { isDark } = useTheme();

  const features = useMemo(() => [
    {
      icon: FaHandHoldingHeart,
      title: 'Handcrafted with Love',
      description: 'Every item is carefully handmade by skilled artisans with attention to detail and passion.',
      color: 'from-pink-600 to-rose-600',
      bgColor: 'bg-pink-100',
      darkBgColor: 'bg-pink-900/20',
      accentIcon: FaHeart
    },
    {
      icon: FaShippingFast,
      title: 'Free Shipping',
      description: 'Enjoy free worldwide shipping on all orders over $50. Fast and reliable delivery.',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-100',
      darkBgColor: 'bg-blue-900/20',
      accentIcon: FaRocket
    },
    {
      icon: FaRecycle,
      title: 'Eco-Friendly',
      description: 'We use sustainable materials and eco-friendly practices in all our products.',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-green-100',
      darkBgColor: 'bg-green-900/20',
      accentIcon: FaLeaf
    },
    {
      icon: FaAward,
      title: 'Premium Quality',
      description: 'Highest quality standards with 100% satisfaction guarantee on all purchases.',
      color: 'from-amber-600 to-orange-600',
      bgColor: 'bg-amber-100',
      darkBgColor: 'bg-amber-900/20',
      accentIcon: FaGem
    }
  ], []);

  const stats = useMemo(() => [
    { number: '10K+', label: 'Happy Customers', color: 'bg-gradient-to-r from-green-600 to-emerald-600' },
    { number: '4.9★', label: 'Average Rating', color: 'bg-gradient-to-r from-amber-600 to-orange-600' },
    { number: '50+', label: 'Skilled Artisans', color: 'bg-gradient-to-r from-blue-600 to-cyan-600' },
    { number: '100%', label: 'Satisfaction', color: 'bg-gradient-to-r from-pink-600 to-rose-600' }
  ], []);

  // Intersection Observer untuk trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleFeatureInteraction = useCallback((index: number) => {
    setActiveFeature(activeFeature === index ? null : index);
  }, [activeFeature]);

  const scrollToProducts = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('products')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      aria-labelledby="features-heading"
      className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-linear-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-linear-to-br from-orange-50 via-white to-pink-50'
      }`}
    >
      {/* Animated Background Elements */}
      <div 
        className={`absolute top-10 left-10 w-20 h-20 rounded-full blur-3xl opacity-40 animate-pulse ${
          isDark ? 'bg-orange-900/30' : 'bg-orange-200'
        }`}
        aria-hidden="true"
      />
      <div 
        className={`absolute bottom-10 right-10 w-24 h-24 rounded-full blur-3xl opacity-40 animate-pulse motion-safe:[animation-delay:1000ms] ${
          isDark ? 'bg-pink-900/30' : 'bg-pink-200'
        }`}
        aria-hidden="true"
      />
      <div 
        className={`absolute top-1/2 left-1/4 w-16 h-16 rounded-full blur-3xl opacity-30 animate-pulse motion-safe:[animation-delay:500ms] ${
          isDark ? 'bg-blue-900/30' : 'bg-blue-200'
        }`}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center px-4 py-2 rounded-full shadow-lg mb-6 border transition-colors duration-300 ${
              isDark 
                ? 'bg-gray-800 border-orange-700/50' 
                : 'bg-white border-orange-200'
            }`}
            aria-label="Why We're Special - Featured Quality"
          >
            <FaStar className="text-orange-500 mr-2 motion-safe:animate-spin motion-safe:[animation-duration:2000ms]" aria-hidden="true" />
            <span className="bg-linear-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              Why We're Special
            </span>
          </div>
          
          <h2 id="features-heading" className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Why Choose <span className="bg-linear-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">ArtisanCraft</span>?
          </h2>
          
          <div className="relative inline-block">
            <p className={`text-xl max-w-2xl mx-auto relative z-10 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We're committed to bringing you the finest handmade products with exceptional service.
            </p>
            <div 
              className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-linear-to-r from-orange-500 to-pink-500 rounded-full origin-left scale-x-0 motion-safe:animate-grow motion-safe:[animation-delay:700ms] motion-safe:[animation-duration:1000ms] motion-safe:[animation-fill-mode:forwards]"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className={`group relative rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform focus-within:scale-105 focus-within:ring-4 focus-within:ring-opacity-50 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              } ${
                activeFeature === index 
                  ? 'scale-105 ring-4 ring-opacity-50' 
                  : 'hover:scale-105'
              } ${
                isDark ? 'ring-gray-600 focus:ring-orange-500' : 'ring-orange-200 focus:ring-orange-500'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
              onClick={() => handleFeatureInteraction(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleFeatureInteraction(index);
                }
              }}
              tabIndex={0}
              aria-labelledby={`feature-${index}-title`}
              aria-describedby={`feature-${index}-desc`}
            >
              {/* Background Glow Effect */}
              <div 
                className={`absolute inset-0 rounded-3xl bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                aria-hidden="true"
              />

              {/* Floating Accent Icon */}
              <div 
                className={`absolute -top-3 -right-3 w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-linear-to-br ${feature.color} transform rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-lg ${
                  isDark ? feature.darkBgColor : feature.bgColor
                }`}
                aria-hidden="true"
              >
                <feature.accentIcon size={20} />
              </div>

              {/* Main Icon Container */}
              <div className="relative mb-6">                
                {/* Animated Ring */}
                <div 
                  className={`absolute inset-0 w-20 h-20 rounded-3xl border-4 border-transparent bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-20 motion-safe:animate-ping motion-safe:[animation-duration:2000ms]`}
                  aria-hidden="true"
                />
                <feature.icon 
                  className={`text-4xl ${feature.color.split(' ')[0]} opacity-90`} 
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <h3 
                id={`feature-${index}-title`}
                className={`text-2xl font-bold mb-4 bg-linear-to-br ${feature.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
              >
                {feature.title}
              </h3>
              
              <p 
                id={`feature-${index}-desc`}
                className={`leading-relaxed text-lg transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-300 group-hover:text-gray-100' 
                    : 'text-gray-600 group-hover:text-gray-700'
                }`}
              >
                {feature.description}
              </p>

              {/* Interactive Hover Line */}
              <div 
                className={`absolute bottom-0 left-1/2 w-0 h-1 bg-linear-to-r ${feature.color} rounded-full transform -translate-x-1/2 group-hover:w-3/4 transition-all duration-500 delay-200`}
                aria-hidden="true"
              />

              {/* Particle Effects */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl" aria-hidden="true">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 bg-linear-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-100 motion-safe:animate-bounce`}
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${10 + i * 40}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Stats Bar */}
        <div 
          className={`mt-16 rounded-2xl shadow-lg p-8 border transition-all duration-500 transform hover:scale-105 focus-within:scale-105 ${
            isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-100'
          }`}
          aria-labelledby="stats-heading"
        >
          <h3 id="stats-heading" className="sr-only">Company Statistics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300 focus:scale-110"
                style={{ transitionDelay: `${index * 100}ms` }}
                tabIndex={0}
                aria-label={`${stat.number} ${stat.label}`}
              >
                <div className={`text-3xl lg:text-4xl font-bold bg-clip-text text-transparent ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className={`font-medium transition-colors duration-300 ${
                  isDark 
                    ? 'text-gray-300 group-hover:text-gray-100' 
                    : 'text-gray-600 group-hover:text-gray-800'
                }`}>
                  {stat.label}
                </div>
                <div 
                  className={`w-0 h-1 ${stat.color.split(' ')[0]} rounded-full mx-auto mt-2 group-hover:w-1/2 transition-all duration-500 delay-200`}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Animated CTA Button */}
        <div className="text-center mt-12">
          <a
            href="#products"
            onClick={scrollToProducts}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-linear-to-r from-orange-600 to-pink-600 rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            aria-label="Start shopping now - Navigate to products section"
          >
            <span className="relative z-10 flex items-center">
              Start Shopping Now
              <FaStar className="ml-2 group-hover:rotate-180 transition-transform duration-500" aria-hidden="true" />
            </span>
            
            {/* Animated Background */}
            <div 
              className="absolute inset-0 bg-linear-to-r from-pink-600 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              aria-hidden="true"
            />
            
            {/* Sparkle Effects */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 motion-safe:animate-ping"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '1.5s'
                  }}
                />
              ))}
            </div>

            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden" aria-hidden="true">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 group-active:opacity-20 transition-opacity duration-300" />
            </div>
          </a>

          {/* Floating text */}
          <p className={`mt-4 animate-pulse ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            ✨ Discover your perfect handmade piece today!
          </p>
        </div>
      </div>

      {/* Floating decorative elements dengan animasi bounce */}
      <div 
        className={`absolute top-20 right-20 w-8 h-8 rounded-full opacity-30 motion-safe:animate-bounce motion-safe:[animation-delay:300ms] ${
          isDark ? 'bg-orange-700' : 'bg-orange-300'
        }`}
        aria-hidden="true"
      />
      <div 
        className={`absolute bottom-32 left-16 w-6 h-6 rounded-full opacity-40 motion-safe:animate-bounce motion-safe:[animation-delay:700ms] ${
          isDark ? 'bg-pink-700' : 'bg-pink-300'
        }`}
        aria-hidden="true"
      />
      <div 
        className={`absolute top-40 left-20 w-4 h-4 rounded-full opacity-50 motion-safe:animate-bounce motion-safe:[animation-delay:1200ms] ${
          isDark ? 'bg-blue-700' : 'bg-blue-300'
        }`}
        aria-hidden="true"
      />

      {/* Animated border elements */}
      <div 
        className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-500 to-pink-500 transform scale-x-0 motion-safe:animate-grow motion-safe:[animation-delay:500ms] motion-safe:[animation-duration:1500ms] motion-safe:[animation-fill-mode:forwards]"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 right-0 w-full h-1 bg-linear-to-r from-pink-500 to-orange-500 transform scale-x-0 motion-safe:animate-grow motion-safe:[animation-delay:800ms] motion-safe:[animation-duration:1500ms] motion-safe:[animation-fill-mode:forwards]"
        aria-hidden="true"
      />
    </section>
  );
});

export default Features;