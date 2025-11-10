// sections/Testimonials.tsx
import React, { useMemo } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Testimonials: React.FC = React.memo(() => {
  const { isDark } = useTheme();

  const testimonials = useMemo(() => [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      comment: 'The quality of these handmade products is exceptional! Every piece feels unique and special.',
      image: '/images/girl3.webp',
      alt: 'Portrait of Sarah Johnson - satisfied ArtisanCraft customer from New York'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      rating: 5,
      comment: 'Fast shipping and beautiful packaging. The artisan bowl I purchased is the centerpiece of my dining table!',
      image: '/images/boy1.webp',
      alt: 'Portrait of Michael Chen - happy ArtisanCraft customer from Toronto'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'London, UK',
      rating: 5,
      comment: 'I love supporting independent artisans. The craftsmanship is incredible and the customer service is top-notch.',
      image: '/images/girl4.webp',
      alt: 'Portrait of Emma Rodriguez - delighted ArtisanCraft customer from London'
    }
  ], []);

  return (
    <section 
      id="testimonials" 
      aria-labelledby="testimonials-heading"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark ? 'bg-gray-800/50' : 'bg-white/50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="testimonials-heading"
            className={`text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            What Our Customers Say
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 focus-within:shadow-2xl focus-within:-translate-y-2 ${
                isDark ? 'bg-gray-700' : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              role="listitem"
              tabIndex={0}
            >
              {/* Quote Icon */}
              <div 
                className="absolute -top-4 left-8 w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center text-white"
                aria-hidden="true"
              >
                <FaQuoteLeft size={20} />
              </div>

              {/* Rating dengan screen reader text */}
              <div 
                className="flex space-x-1 mb-4"
                aria-label={`Rated ${testimonial.rating} out of 5 stars`}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className="text-yellow-400" 
                    aria-hidden="true"
                  />
                ))}
                <span className="sr-only">
                  {testimonial.rating} out of 5 stars
                </span>
              </div>

              {/* Comment */}
              <blockquote className="mb-6">
                <p className={`italic ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  "{testimonial.comment}"
                </p>
              </blockquote>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional accessibility information */}
        <div className="mt-12 text-center">
          <p className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            All testimonials are from verified customers. Customer names and locations are used with permission.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;