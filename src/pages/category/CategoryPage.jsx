import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import ProductCard from '../../components/newArrivals/ProductCard';
import './CategoryPage.css';

export default function CategoryPage() {
  const { styleName } = useParams();
  const navigate = useNavigate();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const activeStyleSlug = styleName ? styleName.toLowerCase() : "casual";
  const formattedTitle = activeStyleSlug.charAt(0).toUpperCase() + activeStyleSlug.slice(1);

  // Auto scroll up trigger whenever URL parameter resets
  useEffect(() => {
    window.scrollTo(0, 0);
    setAppliedFilters({ category: null, priceMax: 250, color: null, size: null });
    setTempCategory(null);
    setTempPriceMax(250); // FIXED: Default inventory views max price increased to 250
    setTempColor(null);
    setTempSize(null);
  }, [styleName]);

  const [tempCategory, setTempCategory] = useState(null);
  const [tempPriceMax, setTempPriceMax] = useState(250);
  const [tempColor, setTempColor] = useState(null);
  const [tempSize, setTempSize] = useState(null);

  const [appliedFilters, setAppliedFilters] = useState({
    category: null, priceMax: 250, color: null, size: null
  });

  const [sortOption, setSortOption] = useState("popular");

  // ISSUE 1 & 2 FIXED: Apply parameters and trigger top canvas view reset
  const handleApplyFilterActionSubmit = () => {
    setAppliedFilters({
      category: tempCategory, priceMax: tempPriceMax,
      color: tempColor, size: tempSize
    });
    setIsMobileFilterOpen(false);
    
    // Smooth scroll back to top boundary where products grid is situated
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDressStyleParamSwitch = (targetStyleName) => {
    const cleanSlug = targetStyleName.toLowerCase();
    if (cleanSlug !== activeStyleSlug) {
      navigate(`/category/${cleanSlug}`);
    }
  };

  // ISSUE 3 FIXED: Bulletproof string normalizer for exact item matching pipelines
  const finalFilteredProducts = productsData.filter(item => {
    const itemStyle = item.style ? item.style.toLowerCase() : "casual";
    if (itemStyle !== activeStyleSlug) return false;

    // Fixed Plural vs Singular data dictionary key validation matching parameters
    if (appliedFilters.category) {
      const dbType = item.type ? item.type.toLowerCase().trim() : "";
      
      // Clean string mutations to remove plural 's' structures safely
      let cleanQuery = appliedFilters.category.toLowerCase().trim();
      if (cleanQuery === "t-shirts") cleanQuery = "t-shirt";
      if (cleanQuery === "shirts") cleanQuery = "shirt";
      if (cleanQuery === "shorts") cleanQuery = "short";
      if (cleanQuery === "jeans") cleanQuery = "jean";
      
      if (!dbType.includes(cleanQuery) && !cleanQuery.includes(dbType)) return false;
    }

    if (item.price > appliedFilters.priceMax) return false;

    if (appliedFilters.color) {
      if (!item.colors || !item.colors.includes(appliedFilters.color)) return false;
    }

    if (appliedFilters.size) {
      if (!item.sizes || !item.sizes.includes(appliedFilters.size)) return false;
    }

    return true;
  });

  if (sortOption === "price-low") {
    finalFilteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "latest") {
    finalFilteredProducts.sort((a, b) => b.id - a.id);
  }

  const colorPaletteHex = [
    '#00C12B', '#F51111', '#F5DD11', '#F57E11', 
    '#11A6F5', '#111EF5', '#B811F5', '#F511A1', 
    '#FFFFFF', '#000000'
  ];
  
  const sizesListArray = [
    'XX-Small', 'X-Small', 'Small', 'Medium', 
    'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'
  ];

  return (
    <div className="shop-co-category-page-framework">
      <div className="category-page-bounds-container">
        
        <nav className="category-page-breadcrumbs-trail">
          <span className="bc-trail-node-stale">Home</span>
          <span className="bc-trail-arrow">›</span>
          <span className="bc-trail-node-active">{formattedTitle}</span>
        </nav>

        <div className="category-split-main-body-layout">
          {/* FILTER SIDEBAR PANEL CONTAINER */}
          <aside className={`category-left-sidebar-filter-panel ${
            isMobileFilterOpen ? 'mobile-drawer-active' : ''
          }`}>
            <div className="filter-panel-header-row">
              <h3>Filters</h3>
              <button 
                type="button" 
                className="mobile-drawer-close-trigger-btn" 
                onClick={() => setIsMobileFilterOpen(false)}
              >✕</button>
            </div>
            
            <div className="filter-divider-line"></div>

            {/* SUB-CATEGORIES SECTION LIST */}
            <div className="filter-section-block vertical-categories-stack">
              {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((categoryItem, idx) => {
                const isCatActive = tempCategory === categoryItem;
                return (
                  <div 
                    key={idx} 
                    className="category-selection-link-row"
                    onClick={() => setTempCategory(isCatActive ? null : categoryItem)}
                    style={{ 
                      fontWeight: isCatActive ? '700' : '400',
                      color: isCatActive ? '#000000' : 'rgba(0,0,0,0.6)'
                    }}
                  >
                    <span>{categoryItem}</span>
                    <span className="arrow-carat-glyph">›</span>
                  </div>
                );
              })}
            </div>

            <div className="filter-divider-line"></div>

            {/* PRICE RANGE INPUT SLIDER */}
            <div className="filter-section-block">
              <div className="section-accordion-header-row">
                <h4>Price (Max: ${tempPriceMax})</h4>
                <span className="accordion-arrow-node">^</span>
              </div>
              <div className="price-slider-mock-container-wrapper">
                <input 
                  type="range" min="10" max="250" 
                  value={tempPriceMax} 
                  onChange={(e) => setTempPriceMax(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#000000', cursor: 'pointer' }}
                />
                <div className="price-labels-flex-row">
                  <span>$10</span>
                  <span>$250</span>
                </div>
              </div>
            </div>

            <div className="filter-divider-line"></div>

            {/* BUBBLE COLORS PICKERS GRID */}
            <div className="filter-section-block">
              <div className="section-accordion-header-row">
                <h4>Colors</h4>
                <span className="accordion-arrow-node">^</span>
              </div>
              <div className="colors-grid-matrix-mesh-box">
                {colorPaletteHex.map((hexValue, idx) => {
                  const isColorPicked = tempColor === hexValue;
                  return (
                    <div 
                      key={idx} 
                      className="filter-color-circle-item" 
                      onClick={() => setTempColor(isColorPicked ? null : hexValue)}
                      style={{ 
                        backgroundColor: hexValue, 
                        border: isColorPicked ? '2px solid #000000' : (hexValue === '#FFFFFF' ? '1px solid #e5e5e5' : 'none'),
                        transform: isColorPicked ? 'scale(1.12)' : 'none'
                      }}
                    >
                      {isColorPicked && (
                        <span className="active-color-check-vector" style={{ color: hexValue === '#FFFFFF' ? '#000000' : '#ffffff' }}>✓</span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="filter-divider-line"></div>

            {/* SIZES PILLS ACCORDION CAPSULES */}
            <div className="filter-section-block">
              <div className="section-accordion-header-row">
                <h4>Size</h4>
                <span className="accordion-arrow-node">^</span>
              </div>
              <div className="sizes-capsules-flexbox-mesh-wrap">
                {sizesListArray.map((sizeName, idx) => {
                  const isSizeActive = tempSize === sizeName;
                  return (
                    <button 
                      type="button" key={idx} 
                      onClick={() => setTempSize(isSizeActive ? null : sizeName)}
                      className={`filter-size-capsule-btn ${isSizeActive ? 'size-active-black-pill' : ''}`}
                    >
                      {sizeName}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="filter-divider-line"></div>

            {/* DRESS STYLE PARAM METRICS ACCORDIONS */}
            <div className="filter-section-block vertical-categories-stack">
              <div className="section-accordion-header-row" style={{ marginBottom: '12px' }}>
                <h4>Dress Style</h4>
                <span className="accordion-arrow-node">^</span>
              </div>
              {['Casual', 'Formal', 'Party', 'Gym'].map((styleItemName, idx) => (
                <div 
                  key={idx} 
                  className="category-selection-link-row"
                  onClick={() => handleDressStyleParamSwitch(styleItemName)}
                >
                  <span style={{ 
                    color: styleItemName === formattedTitle ? '#000000' : 'rgba(0,0,0,0.6)', 
                    fontWeight: styleItemName === formattedTitle ? '600' : '400' 
                  }}>{styleItemName}</span>
                  <span className="arrow-carat-glyph">›</span>
                </div>
              ))}
            </div>

            <button type="button" className="apply-filters-action-trigger-btn" onClick={handleApplyFilterActionSubmit}>
              Apply Filter
            </button>
          </aside>
          {/* MAIN PRODUCTS DISPLAY */}
          <main className="category-right-side-showcase-canvas-column">
            <div className="showcase-header-controls-flex-row">
              <h2 className="active-category-main-heading-title">{formattedTitle}</h2>
              
              <div className="showcase-sorting-meta-actions-box">
                <span className="meta-counter-label-text">
                  Showing 1-{finalFilteredProducts.length} of {finalFilteredProducts.length} Products
                </span>
                
                <div className="sorting-selector-dropdown-wrapper">
                  <span className="sort-static-prefix">Sort by:</span>
                  <select 
                    value={sortOption} 
                    onChange={(e) => setSortOption(e.target.value)}
                    className="native-sorting-select-node"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="latest">Latest Arrivals</option>
                    <option value="price-low">Price: Low to High</option>
                  </select>
                </div>

                <button 
                  type="button" 
                  className="mobile-filter-trigger-action-launcher-btn" 
                  onClick={() => setIsMobileFilterOpen(true)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div className="category-products-display-grid-matrix">
              {finalFilteredProducts.length > 0 ? (
                finalFilteredProducts.map((item) => (
                  <ProductCard 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    originalPrice={item.originalPrice}
                    discount={item.discount}
                    rating={item.rating}
                    imageSrc={item.imageSrc}
                  />
                ))
              ) : (
                <div className="no-filtered-results-fallback-card" style={{ gridColumn: '1 / -1', padding: '80px 20px', textAlign: 'center', fontFamily: 'Plus Jakarta Sans', color: 'rgba(0,0,0,0.5)', fontSize: '16px' }}>
                  No products match the selected filter configuration.
                </div>
              )}
            </div>

            {/* PAGINATION MODULE */}
            <div className="category-pagination-footer-nav-bar-row">
              <button type="button" className="pag-nav-arrow-btn prev-btn">← Previous</button>
              <div className="pag-numeric-nodes-flex-row">
                <span className="pag-num-node nodes-active-black">1</span>
                <span className="pag-num-node">2</span>
                <span className="pag-num-node">3</span>
                <span className="pag-num-span-dots">...</span>
                <span className="pag-num-node">8</span>
                <span className="pag-num-node">9</span>
                <span className="pag-num-node">10</span>
              </div>
              <button type="button" className="pag-nav-arrow-btn next-btn">Next →</button>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
