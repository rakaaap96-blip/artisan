// App.tsx
import { useState, useEffect, lazy, Suspense } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar.tsx';

// Lazy load semua sections
const Hero = lazy(() => import('./sections/Hero'));
const Features = lazy(() => import('./sections/Features'));
const Products = lazy(() => import('./sections/Products'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const CTA = lazy(() => import('./sections/CTA'));
const Footer = lazy(() => import('./sections/Footer'));

// Simple loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-40 py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
  </div>
);

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'products', 'testimonials', 'cta'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    // Throttle scroll event untuk performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-linear-to-br from-gray-900 to-gray-800' 
        : 'bg-linear-to-br from-amber-50 to-orange-100'
    }`}>
      {/* Header */}
      <header>
        <Navbar activeSection={activeSection} />
      </header>

      {/* Main Content dengan Suspense untuk masing-masing section */}
      <main>
        <Suspense fallback={<SectionLoader />}>
          <section id="home" aria-label="Hero section">
            <Hero />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="features" aria-label="Features section">
            <Features />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="products" aria-label="Products section">
            <Products />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="testimonials" aria-label="Customer testimonials">
            <Testimonials />
          </section>
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <section id="cta" aria-label="Call to action">
            <CTA />
          </section>
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="h-20 bg-gray-100 dark:bg-gray-800"></div>}>
        <footer>
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;