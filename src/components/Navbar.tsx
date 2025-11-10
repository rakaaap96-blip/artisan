// components/Navbar.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'products', label: 'Products' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'cta', label: 'Shop Now' }
  ];

  return (
    <nav 
      className="fixed top-0 w-full backdrop-blur-md z-50 shadow-lg transition-colors duration-300"
      style={{ 
        backgroundColor: isDark ? 'rgba(17, 24, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        borderBottom: isDark ? '1px solid rgba(55, 65, 81, 0.5)' : '1px solid rgba(229, 231, 235, 0.5)'
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo dengan gambar local */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/ArtisanLogo.png" 
              alt="ArtisanCraft Logo"
              className="h-15 w-15 object-contain"
              width={60}
              height={60}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                  activeSection === item.id
                    ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/30 scale-105'
                    : isDark 
                      ? 'text-gray-200 hover:text-orange-400 hover:bg-gray-700' 
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
            
            {/* Dark Mode Toggle - Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg ml-4 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              style={{ 
                backgroundColor: isDark ? 'rgb(55, 65, 81)' : 'rgb(243, 244, 246)',
                color: isDark ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)'
              }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                // Sun icon untuk light mode
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                // Moon icon untuk dark mode
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button dengan Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              style={{ 
                backgroundColor: isDark ? 'rgb(55, 65, 81)' : 'rgb(243, 244, 246)',
                color: isDark ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)'
              }}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Hamburger Menu Button - FIXED: Added aria-label */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              style={{ 
                color: isDark ? 'rgb(229, 231, 235)' : 'rgb(75, 85, 99)'
              }}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <FaTimes size={20} aria-hidden="true" /> : <FaBars size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-16 left-0 w-full backdrop-blur-md border-t transition-colors duration-300"
            style={{ 
              backgroundColor: isDark ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              borderColor: isDark ? 'rgb(55, 65, 81)' : 'rgb(229, 231, 235)'
            }}
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                    activeSection === item.id
                      ? 'bg-orange-600 text-white'
                      : isDark 
                        ? 'text-gray-200 hover:bg-gray-700' 
                        : 'text-gray-800 hover:bg-orange-50'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;