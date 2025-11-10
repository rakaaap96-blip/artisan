// sections/Footer.tsx
import React, { useState, useCallback, useMemo } from 'react';
import { 
  FaShoppingBag, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaPinterest,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCreditCard,
  FaShieldAlt,
  FaHeadset,
  FaChevronDown,
  FaChevronUp,
  FaArrowUp
} from 'react-icons/fa';

const Footer: React.FC = React.memo(() => {
  const currentYear = new Date().getFullYear();
  const [openSections, setOpenSections] = useState<{[key: string]: boolean}>({});
  const [email, setEmail] = useState('');

  const scrollToSection = useCallback((sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToTop = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const toggleSection = useCallback((section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  }, []);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleNewsletterSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  }, [email]);

  const quickLinks = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'products', label: 'Products' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'cta', label: 'Shop Now' }
  ], []);

  const customerServiceLinks = useMemo(() => [
    { href: '#', label: 'Contact Us' },
    { href: '#', label: 'Shipping Info' },
    { href: '#', label: 'Returns & Exchanges' },
    { href: '#', label: 'Size Guide' },
    { href: '#', label: 'FAQ' }
  ], []);

  const legalLinks = useMemo(() => [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' }
  ], []);

  const trustBadges = useMemo(() => [
    { icon: FaShieldAlt, label: 'Secure Payment' },
    { icon: FaCreditCard, label: 'SSL Encryption' },
    { icon: FaHeadset, label: '24/7 Support' },
    { icon: FaShoppingBag, label: 'Quality Guarantee' }
  ], []);

  const socialLinks = useMemo(() => [
    { icon: FaFacebookF, href: '#', label: 'Follow us on Facebook' },
    { icon: FaTwitter, href: '#', label: 'Follow us on Twitter' },
    { icon: FaInstagram, href: '#', label: 'Follow us on Instagram' },
    { icon: FaPinterest, href: '#', label: 'Follow us on Pinterest' }
  ], []);

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-8 sm:py-12">
            
            {/* Company Info - Always visible */}
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <img 
                  src="/images/ArtisanLogo.png" 
                  alt="ArtisanCraft - Handmade Crafts Marketplace"
                  className="h-8 w-8 object-contain"
                  width={32}
                  height={32}
                  loading="lazy"
                />
                <span className="text-xl font-bold">ArtisanCraft</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Bringing you the finest handmade crafts from skilled artisans worldwide. 
                Each piece tells a unique story of craftsmanship and passion.
              </p>
              <div className="flex space-x-3" aria-label="Social media links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    aria-label={social.label}
                  >
                    <social.icon size={14} className="sm:w-4 sm:h-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links - Accordion on mobile */}
            <div className="lg:col-span-1">
              <button 
                onClick={() => toggleSection('quickLinks')}
                className="flex justify-between items-center w-full lg:hidden text-left py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
                aria-expanded={openSections.quickLinks}
                aria-controls="quick-links-content"
              >
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                {openSections.quickLinks ? 
                  <FaChevronUp aria-hidden="true" /> : 
                  <FaChevronDown aria-hidden="true" />
                }
              </button>
              <h3 className="text-lg font-semibold text-white hidden lg:block mb-4">Quick Links</h3>
              <div 
                id="quick-links-content"
                className={`space-y-2 ${openSections.quickLinks ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}
                role="navigation"
                aria-label="Quick navigation links"
              >
                {quickLinks.map((link) => (
                  <button 
                    key={link.id}
                    onClick={(e) => scrollToSection(link.id, e)}
                    className="block text-gray-300 hover:text-orange-400 transition-colors duration-300 w-full text-left py-2 text-sm sm:text-base focus:outline-none focus:text-orange-400 focus:underline"
                    aria-label={`Navigate to ${link.label} section`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Service - Accordion on mobile */}
            <div className="lg:col-span-1">
              <button 
                onClick={() => toggleSection('customerService')}
                className="flex justify-between items-center w-full lg:hidden text-left py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
                aria-expanded={openSections.customerService}
                aria-controls="customer-service-content"
              >
                <h3 className="text-lg font-semibold text-white">Customer Service</h3>
                {openSections.customerService ? 
                  <FaChevronUp aria-hidden="true" /> : 
                  <FaChevronDown aria-hidden="true" />
                }
              </button>
              <h3 className="text-lg font-semibold text-white hidden lg:block mb-4">Customer Service</h3>
              <div 
                id="customer-service-content"
                className={`space-y-2 ${openSections.customerService ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}
                role="navigation"
                aria-label="Customer service links"
              >
                {customerServiceLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-orange-400 transition-colors duration-300 py-2 text-sm sm:text-base focus:outline-none focus:text-orange-400 focus:underline"
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info & Newsletter */}
            <div className="lg:col-span-1">
              <button 
                onClick={() => toggleSection('contact')}
                className="flex justify-between items-center w-full lg:hidden text-left py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
                aria-expanded={openSections.contact}
                aria-controls="contact-content"
              >
                <h3 className="text-lg font-semibold text-white">Contact & Newsletter</h3>
                {openSections.contact ? 
                  <FaChevronUp aria-hidden="true" /> : 
                  <FaChevronDown aria-hidden="true" />
                }
              </button>
              <h3 className="text-lg font-semibold text-white hidden lg:block mb-4">Contact Info</h3>
              <div 
                id="contact-content"
                className={`space-y-4 ${openSections.contact ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}
              >
                <div className="space-y-3" aria-label="Contact information">
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="text-orange-500 shrink-0 mt-1" size={16} aria-hidden="true" />
                    <span className="text-gray-300 text-sm sm:text-base">
                      123 Artisan Street, Creative City, CC 10101
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaPhone className="text-orange-500 shrink-0" size={16} aria-hidden="true" />
                    <a 
                      href="tel:+15551232789" 
                      className="text-gray-300 text-sm sm:text-base hover:text-orange-400 transition-colors duration-300 focus:outline-none focus:text-orange-400 focus:underline"
                      aria-label="Call us at +1 (555) 123-ARTY"
                    >
                      +1 (555) 123-ARTY
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-orange-500 shrink-0" size={16} aria-hidden="true" />
                    <a 
                      href="mailto:hello@artisancraft.com" 
                      className="text-gray-300 text-sm sm:text-base hover:text-orange-400 transition-colors duration-300 focus:outline-none focus:text-orange-400 focus:underline"
                      aria-label="Email us at hello@artisancraft.com"
                    >
                      hello@artisancraft.com
                    </a>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="space-y-3 pt-4">
                  <h4 className="font-semibold text-white text-sm sm:text-base">Newsletter</h4>
                  <p className="text-sm text-gray-300">
                    Get updates on new products and special offers
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <input 
                      type="email" 
                      placeholder="Your email"
                      value={email}
                      onChange={handleEmailChange}
                      className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-sm"
                      aria-label="Enter your email for newsletter subscription"
                      required
                    />
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                      aria-label="Subscribe to newsletter"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 py-6 sm:py-8"
            aria-label="Trust and security badges"
          >
            {trustBadges.map((badge, index) => (
              <div 
                key={index}
                className="flex items-center justify-center space-x-2 text-gray-300 text-center"
              >
                <badge.icon className="text-orange-500 shrink-0" size={18} aria-hidden="true" />
                <span className="text-xs sm:text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile App Promotion - FIXED CONTRAST */}
      <div className="bg-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-4 space-y-3 sm:space-y-0">
            <div className="text-white text-center sm:text-left">
              <span className="font-bold text-base sm:text-lg">Get our mobile app!</span>
              <span className="ml-0 sm:ml-2 block sm:inline text-sm sm:text-base font-medium">
                Shop handmade crafts on the go.
              </span>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <button 
                className="px-4 py-2 bg-white text-orange-700 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm font-bold whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-700"
                aria-label="Download on the App Store"
              >
                App Store
              </button>
              <button 
                className="px-4 py-2 bg-white text-orange-700 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm font-bold whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-700"
                aria-label="Get it on Google Play"
              >
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center py-6 space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-gray-300 text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
              © {currentYear} ArtisanCraft. All rights reserved.
            </div>

            {/* Legal Links */}
            <div 
              className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-xs sm:text-sm order-1 sm:order-2"
              role="navigation"
              aria-label="Legal links"
            >
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-orange-400 transition-colors duration-300 py-1 focus:outline-none focus:text-orange-400 focus:underline font-medium"
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 text-xs sm:text-sm order-3 focus:outline-none focus:text-orange-400 focus:underline font-medium"
              aria-label="Scroll back to top of page"
            >
              <span className="hidden sm:inline">Back to Top</span>
              <span className="sm:hidden">Top</span>
              <FaArrowUp size={12} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button for Mobile */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 sm:hidden w-12 h-12 bg-orange-700 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-800 transition-colors duration-300 z-40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Scroll back to top of page"
      >
        <FaArrowUp size={16} aria-hidden="true" />
      </button>
    </footer>
  );
});

export default Footer;