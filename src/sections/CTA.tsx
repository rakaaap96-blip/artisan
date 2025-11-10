// sections/CTA.tsx
import React from 'react';
import { FaGift, FaShippingFast, FaShieldAlt } from 'react-icons/fa';

const CTA: React.FC = () => {
  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data dipindah ke luar useMemo untuk mengurangi overhead
  const countdownItems = [
    { value: '02', label: 'Days' },
    { value: '12', label: 'Hours' },
    { value: '45', label: 'Minutes' },
    { value: '30', label: 'Seconds' }
  ];

  const benefits = [
    {
      icon: FaGift,
      text: 'Free gift wrapping available'
    },
    {
      icon: FaShippingFast,
      text: 'Free shipping over $50'
    },
    {
      icon: FaShieldAlt,
      text: '30-day satisfaction guarantee'
    }
  ];

  return (
    <section 
      id="cta" 
      className="py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-linear-to-r from-orange-700 to-orange-800 rounded-3xl p-6 lg:p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Ready to Discover
                <span className="block text-white">Your Next Favorite Piece?</span>
              </h2>
              
              <p className="text-lg text-white">
                Join thousands of satisfied customers and bring authentic handmade artistry into your life.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <benefit.icon 
                      className="text-white shrink-0" 
                      size={24} 
                    />
                    <span className="text-white text-lg">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons - IMPROVED TOUCH TARGETS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={scrollToProducts}
                  className="min-h-12 px-8 py-4 text-lg font-semibold bg-white text-orange-700 rounded-lg hover:bg-orange-50 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-700 text-center flex items-center justify-center"
                  style={{ minWidth: '140px' }}
                >
                  Shop Collection
                </button>
                <button 
                  className="min-h-12 px-8 py-4 text-lg font-semibold text-white bg-orange-800 border border-orange-300 rounded-lg hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-700 flex items-center justify-center"
                  style={{ minWidth: '140px' }}
                >
                  Contact Artisans
                </button>
              </div>
            </div>

            {/* Right Content - Special Offer */}
            <div>
              <div className="bg-white/20 rounded-xl p-6 border border-white/30">
                <div className="text-center space-y-4">
                  <div className="text-2xl font-bold text-white">Limited Time Offer</div>
                  <div className="text-5xl font-bold text-white">
                    50% OFF
                  </div>
                  <div className="text-lg text-white">Your First Purchase</div>
                  <div className="text-base text-white">
                    Use code: <span className="font-mono bg-white/20 px-3 py-2 rounded-lg text-sm">WELCOME50</span>
                  </div>
                </div>

                {/* Countdown Timer - IMPROVED TOUCH TARGETS */}
                <div className="mt-8 grid grid-cols-4 gap-3 text-center">
                  {countdownItems.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-white/30 rounded-lg p-3 min-h-[60px] flex flex-col items-center justify-center"
                    >
                      <div className="text-xl font-bold text-white">
                        {item.value}
                      </div>
                      <div className="text-sm text-white font-medium">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-8 text-center">
            <p className="text-white text-sm">
              All offers subject to terms and conditions. Free shipping applies to orders over $50.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;