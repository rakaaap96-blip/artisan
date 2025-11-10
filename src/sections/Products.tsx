// sections/Products.tsx
import React, { useState, useMemo, useCallback } from 'react';
import { FaShoppingCart, FaHeart, FaStar, FaFilter } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Products: React.FC = React.memo(() => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const { isDark } = useTheme();

  const products = useMemo(() => [
    {
      id: 1,
      name: 'Handmade Ceramic Mug',
      price: 32.99,
      category: 'kitchen',
      image: '/images/ArtisanMug.webp',
      alt: 'Handmade ceramic mug with artisan patterns - perfect for coffee or tea',
      rating: 4.9,
      featured: true
    },
    {
      id: 2,
      name: 'Artisanal Wooden Bowl',
      price: 45.50,
      category: 'decor',
      image: '/images/ArtisanBowl.webp',
      alt: 'Artisanal wooden bowl handcrafted from natural wood - decorative and functional',
      rating: 4.8,
      featured: false
    },
    {
      id: 3,
      name: 'Handwoven Basket Set',
      price: 68.00,
      category: 'decor',
      image: '/images/ArtisanBasket.webp',
      alt: 'Set of handwoven baskets in various sizes - natural fiber craftsmanship',
      rating: 5.0,
      featured: true
    },
    {
      id: 4,
      name: 'Hand-painted Plate',
      price: 28.75,
      category: 'kitchen',
      image: '/images/ArtisanPlate.webp',
      alt: 'Hand-painted ceramic plate with unique artistic designs - decorative serving piece',
      rating: 4.7,
      featured: false
    },
    {
      id: 5,
      name: 'Artisan Jewelry Box',
      price: 55.00,
      category: 'jewelry',
      image: '/images/ArtisanGemBox.webp',
      alt: 'Artisan jewelry box with intricate carvings - perfect for storing precious items',
      rating: 4.9,
      featured: true
    },
    {
      id: 6,
      name: 'Handwoven Textile',
      price: 42.00,
      category: 'textiles',
      image: '/images/ArtisanTextile.webp',
      alt: 'Handwoven textile with traditional patterns - wall hanging or decorative throw',
      rating: 4.6,
      featured: false
    },
    {
      id: 7,
      name: 'Ceramic Vase',
      price: 38.50,
      category: 'decor',
      image: '/images/ArtisanVase.webp',
      alt: 'Ceramic vase with elegant curves and glaze - perfect for flower arrangements',
      rating: 4.8,
      featured: false
    },
    {
      id: 8,
      name: 'Wooden Cutting Board',
      price: 35.00,
      category: 'kitchen',
      image: '/images/ArtisanWooden.webp',
      alt: 'Wooden cutting board made from sustainable wood - functional kitchen essential',
      rating: 4.7,
      featured: true
    }
  ], []);

  const categories = useMemo(() => ['all', 'kitchen', 'decor', 'jewelry', 'textiles'], []);

  const filteredProducts = useMemo(() => 
    activeCategory === 'all' 
      ? products 
      : products.filter(product => product.category === activeCategory),
    [activeCategory, products]
  );

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
    setShowMobileFilter(false);
  }, []);

  const toggleMobileFilter = useCallback(() => {
    setShowMobileFilter(prev => !prev);
  }, []);

  const handleShowAllProducts = useCallback(() => {
    setActiveCategory('all');
  }, []);

  return (
    <section 
      id="products" 
      aria-labelledby="products-heading"
      className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            id="products-heading"
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Products
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-8 px-4 ${
            isDark ? 'text-gray-200' : 'text-gray-700'
          }`}>
            Discover our carefully curated collection of unique handmade items.
          </p>

          {/* Mobile Filter Button */}
          <div className="md:hidden mb-6">
            <button
              onClick={toggleMobileFilter}
              className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full shadow-lg border mx-auto hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 ${
                isDark 
                  ? 'bg-gray-800 text-gray-100 border-gray-600 hover:bg-gray-700 focus:ring-orange-500' 
                  : 'bg-white text-gray-800 border-gray-300 focus:ring-orange-600'
              }`}
              aria-expanded={showMobileFilter}
              aria-controls="mobile-filter-menu"
              aria-label="Filter product categories"
            >
              <FaFilter size={16} aria-hidden="true" />
              <span>Filter Categories</span>
            </button>
          </div>

          {/* Category Filter - Desktop */}
          <div 
            className="hidden md:flex flex-wrap justify-center gap-3 mb-12"
            role="tablist"
            aria-label="Product categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-full font-medium capitalize transition-all duration-300 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 ${
                  activeCategory === category
                    ? 'bg-orange-700 text-white shadow-lg transform scale-105'
                    : isDark
                      ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:text-orange-400 border border-gray-600 focus:border-orange-500'
                      : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-300 focus:border-orange-500'
                }`}
                role="tab"
                aria-selected={activeCategory === category}
                aria-controls={`products-grid`}
              >
                {category === 'all' ? 'All Products' : category}
              </button>
            ))}
          </div>

          {/* Category Filter - Mobile */}
          {showMobileFilter && (
            <div 
              id="mobile-filter-menu"
              className={`md:hidden rounded-2xl shadow-lg p-4 mb-8 border ${
                isDark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
              }`}
              role="menu"
              aria-label="Mobile filter options"
            >
              <div className="grid grid-cols-2 gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-3 rounded-xl font-medium capitalize transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 ${
                      activeCategory === category
                        ? 'bg-orange-700 text-white shadow-md'
                        : isDark
                          ? 'bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-orange-400 focus:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50'
                    }`}
                    role="menuitem"
                  >
                    {category === 'all' ? 'All Products' : category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Products Count */}
        <div className="flex justify-between items-center mb-6 sm:mb-8 px-2">
          <p className={`text-sm sm:text-base ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Showing <span className="font-semibold">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
          <div className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`} aria-live="polite" aria-atomic="true">
            <span className="hidden sm:inline">Swipe to explore</span>
            <span className="sm:hidden">Scroll to explore</span>
          </div>
        </div>

        {/* Products Grid */}
        <div 
          id="products-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          role="tabpanel"
          aria-labelledby="products-heading"
        >
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className={`group rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border focus-within:ring-2 focus-within:ring-orange-600 focus-within:ring-offset-2 ${
                isDark 
                  ? 'bg-gray-800 border-gray-600 focus-within:border-orange-500' 
                  : 'bg-white border-gray-200 focus-within:border-orange-400'
              }`}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Featured Badge */}
                {product.featured && (
                  <div 
                    className="absolute top-3 left-3 bg-orange-700 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-lg"
                    aria-label="Featured product"
                  >
                    Featured
                  </div>
                )}
                
                {/* Rating Badge */}
                <div className={`absolute top-3 right-3 rounded-full px-3 py-1.5 flex items-center space-x-1 backdrop-blur-sm border ${
                  isDark ? 'bg-gray-900/95 border-gray-600' : 'bg-white/95 border-gray-200'
                }`}>
                  <FaStar className="text-yellow-500 text-xs" aria-hidden="true" />
                  <span className={`text-xs font-semibold ${
                    isDark ? 'text-gray-100' : 'text-gray-800'
                  }`}>
                    {product.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </span>
                </div>

                {/* Wishlist Button */}
                <button 
                  className={`absolute bottom-3 right-3 w-10 h-10 sm:w-10 sm:h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-700 hover:text-white transform hover:scale-110 backdrop-blur-sm border focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 ${
                    isDark ? 'bg-gray-900/95 text-gray-200 border-gray-600 focus:bg-orange-700' : 'bg-white/95 text-gray-700 border-gray-300 focus:bg-orange-700'
                  }`}
                  aria-label={`Add ${product.name} to wishlist`}
                >
                  <FaHeart size={16} className="sm:w-4 sm:h-4" aria-hidden="true" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                {/* Category */}
                <div className="mb-2">
                  <span className={`text-xs sm:text-sm capitalize px-3 py-1.5 rounded-full ${
                    isDark 
                      ? 'text-gray-300 bg-gray-700' 
                      : 'text-gray-700 bg-gray-100'
                  }`}>
                    {product.category}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className={`font-semibold mb-2 group-hover:text-orange-700 transition-colors duration-300 text-base sm:text-lg line-clamp-2 ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {product.name}
                </h3>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-xl sm:text-2xl font-bold text-orange-700">
                      ${product.price}
                    </span>
                  </div>
                  <button 
                    className="flex items-center space-x-2 bg-orange-700 text-white px-4 sm:px-4 py-2.5 rounded-lg hover:bg-orange-800 transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 shadow-md"
                    aria-label={`Add ${product.name} to cart for $${product.price}`}
                  >
                    <FaShoppingCart size={16} className="sm:w-4 sm:h-4" aria-hidden="true" />
                    <span className="hidden sm:inline">Add to Cart</span>
                    <span className="sm:hidden">Add</span>
                  </button>
                </div>

                {/* Quick View on Mobile */}
                <button 
                  className={`w-full mt-3 py-2.5 rounded-lg transition-colors duration-300 sm:hidden text-sm border-2 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 ${
                    isDark
                      ? 'text-gray-300 border-gray-500 hover:border-orange-500 hover:text-orange-400 focus:border-orange-500 focus:text-orange-400'
                      : 'text-gray-700 border-gray-300 hover:border-orange-500 hover:text-orange-600 focus:border-orange-500 focus:text-orange-600'
                  }`}
                  aria-label={`Quick view details for ${product.name}`}
                >
                  Quick View
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button for Mobile */}
        {filteredProducts.length > 4 && (
          <div className="text-center mt-8 sm:mt-12">
            <button 
              className={`border-2 border-orange-700 px-8 py-3.5 rounded-full hover:bg-orange-50 transition-colors duration-300 font-medium sm:hidden focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 ${
                isDark
                  ? 'bg-gray-800 text-orange-400 hover:bg-gray-700 focus:bg-gray-700 border-orange-600'
                  : 'bg-white text-orange-700 focus:bg-orange-50 border-orange-600'
              }`}
              aria-label="Load more products"
            >
              Load More Products
            </button>
          </div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12" role="status" aria-live="polite">
            <div className="text-gray-500 text-6xl mb-4" aria-hidden="true">😔</div>
            <h3 className={`text-xl font-semibold mb-2 ${
              isDark ? 'text-gray-200' : 'text-gray-800'
            }`}>
              No products found
            </h3>
            <p className={`mb-6 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Try selecting a different category
            </p>
            <button
              onClick={handleShowAllProducts}
              className="bg-orange-700 text-white px-6 py-3 rounded-full hover:bg-orange-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 shadow-md"
              aria-label="Show all products"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

export default Products;