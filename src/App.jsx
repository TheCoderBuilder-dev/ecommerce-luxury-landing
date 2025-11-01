import { useState } from 'react';
import './App.css';

// Icon components
const Icons = {
  ShoppingBag: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  ),
  User: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Heart: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  Truck: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  Shield: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  RotateCcw: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="1 4 1 10 7 10"/>
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
    </svg>
  )
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { 
      id: 1, 
      name: 'Minimal Leather Tote', 
      price: 890, 
      category: 'bags',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80'
    },
    { 
      id: 2, 
      name: 'Cashmere Overcoat', 
      price: 1450, 
      category: 'outerwear',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80'
    },
    { 
      id: 3, 
      name: 'Silk Evening Dress', 
      price: 2100, 
      category: 'dresses',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
    },
    { 
      id: 4, 
      name: 'Italian Leather Boots', 
      price: 780, 
      category: 'shoes',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80'
    },
    { 
      id: 5, 
      name: 'Structured Handbag', 
      price: 1290, 
      category: 'bags',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80'
    },
    { 
      id: 6, 
      name: 'Wool Blazer', 
      price: 980, 
      category: 'outerwear',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80'
    },
    { 
      id: 7, 
      name: 'Cocktail Dress', 
      price: 1650, 
      category: 'dresses',
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80'
    },
    { 
      id: 8, 
      name: 'Suede Loafers', 
      price: 650, 
      category: 'shoes',
      image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80'
    }
  ];

  return (
    <div className="luxury-site">
      {/* Vertical Navigation */}
      <nav className="nav-vertical">
        <div className="nav-brand">MAISON</div>
        <div className="nav-items">
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-icons">
          <button className="nav-icon-btn"><Icons.Search /></button>
          <button className="nav-icon-btn"><Icons.User /></button>
          <button className="nav-icon-btn"><Icons.Heart /></button>
          <button className="nav-icon-btn"><Icons.ShoppingBag /></button>
        </div>
      </nav>

      {/* Hero - Full Screen Image */}
      <section className="hero-fullscreen">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80" 
          alt="Fashion Collection" 
          className="hero-bg-image"
        />
        <div className="hero-overlay">
          <div className="hero-content-luxury">
            <div className="hero-season">Spring / Summer 2024</div>
            <h1 className="hero-headline">
              Timeless
              <br />
              Elegance
            </h1>
            <p className="hero-tagline">Where craftsmanship meets modern luxury</p>
            <button className="btn-luxury">Explore Collection</button>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="featured-grid">
        <div className="grid-header">
          <h2 className="section-heading">New Arrivals</h2>
          <div className="category-filters">
            <button 
              className={selectedCategory === 'all' ? 'active' : ''}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            <button 
              className={selectedCategory === 'bags' ? 'active' : ''}
              onClick={() => setSelectedCategory('bags')}
            >
              Bags
            </button>
            <button 
              className={selectedCategory === 'outerwear' ? 'active' : ''}
              onClick={() => setSelectedCategory('outerwear')}
            >
              Outerwear
            </button>
            <button 
              className={selectedCategory === 'dresses' ? 'active' : ''}
              onClick={() => setSelectedCategory('dresses')}
            >
              Dresses
            </button>
          </div>
        </div>

        <div className="products-grid">
          {products
            .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
            .map((product, i) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} className="product-img" />
                  <button className="quick-view">Quick View</button>
                </div>
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">${product.price}</div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Editorial Split Section */}
      <section className="editorial-split">
        <div className="editorial-image">
          <img 
            src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=1200&q=80" 
            alt="Craftsmanship" 
            className="editorial-img"
          />
        </div>
        <div className="editorial-content">
          <div className="editorial-label">Craftsmanship</div>
          <h2 className="editorial-title">
            Made by hand,
            <br />
            built to last
          </h2>
          <p className="editorial-text">
            Each piece is meticulously crafted by master artisans using 
            traditional techniques passed down through generations. We source 
            only the finest materials from sustainable suppliers worldwide.
          </p>
          <a href="#craft" className="link-underline">Learn Our Process →</a>
        </div>
      </section>

      {/* Collection Showcase - Magazine Layout */}
      <section className="collection-showcase">
        <div className="showcase-layout">
          <div className="showcase-large">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80" 
              alt="Winter Collection" 
              className="showcase-img"
            />
            <div className="showcase-caption">
              <h3>Winter Collection</h3>
              <p>Cozy elegance for cold days</p>
            </div>
          </div>
          <div className="showcase-tall">
            <img 
              src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&q=80" 
              alt="Accessories" 
              className="showcase-img"
            />
            <div className="showcase-caption">
              <h3>Accessories</h3>
              <p>The finishing touch</p>
            </div>
          </div>
          <div className="showcase-wide">
            <img 
              src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80" 
              alt="Footwear" 
              className="showcase-img"
            />
            <div className="showcase-caption">
              <h3>Footwear</h3>
              <p>Step into sophistication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal */}
      <section className="testimonials-minimal">
        <div className="testimonials-container">
          <div className="testimonial-item">
            <p className="testimonial-text">
              "The quality is unmatched. Every piece feels like an investment 
              in timeless style."
            </p>
            <div className="testimonial-author"> Sarah M., New York</div>
          </div>
          <div className="testimonial-item">
            <p className="testimonial-text">
              "Exceptional craftsmanship and attention to detail. Worth every penny."
            </p>
            <div className="testimonial-author"> James L., London</div>
          </div>
          <div className="testimonial-item">
            <p className="testimonial-text">
              "Finally, a brand that understands what luxury truly means."
            </p>
            <div className="testimonial-author"> Elena K., Paris</div>
          </div>
        </div>
      </section>

      {/* Features with Icons */}
      <section className="features-luxury">
        <div className="feature-item-luxury">
          <div className="feature-icon-luxury">
            <Icons.Truck />
          </div>
          <h4>Free Shipping</h4>
          <p>On orders over $200</p>
        </div>
        <div className="feature-item-luxury">
          <div className="feature-icon-luxury">
            <Icons.RotateCcw />
          </div>
          <h4>Easy Returns</h4>
          <p>30-day return policy</p>
        </div>
        <div className="feature-item-luxury">
          <div className="feature-icon-luxury">
            <Icons.Shield />
          </div>
          <h4>Secure Payment</h4>
          <p>Protected transactions</p>
        </div>
      </section>

      {/* Newsletter - Full Width */}
      <section className="newsletter-luxury">
        <div className="newsletter-content">
          <h2 className="newsletter-heading">Stay Connected</h2>
          <p className="newsletter-subhead">
            Be the first to know about new collections and exclusive offers
          </p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer - Luxury */}
      <footer className="footer-luxury">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-brand">MAISON</div>
            <p className="footer-desc">
              Timeless designs crafted with exceptional care and attention to detail.
            </p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <a href="#new">New Arrivals</a>
            <a href="#clothing">Clothing</a>
            <a href="#accessories">Accessories</a>
            <a href="#sale">Sale</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#sustainability">Sustainability</a>
            <a href="#careers">Careers</a>
            <a href="#press">Press</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#faq">FAQ</a>
            <a href="#shipping">Shipping</a>
            <a href="#returns">Returns</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom-luxury">
          <div>© 2024 Maison · Designed by Brian Munene Mwirigi · All rights reserved.</div>
          <div className="footer-social">
            <a href="#instagram">Instagram</a>
            <a href="#pinterest">Pinterest</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;