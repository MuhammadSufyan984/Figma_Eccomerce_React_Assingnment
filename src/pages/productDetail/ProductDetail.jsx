// src/pages/productDetail/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../../data/productsData';
import './ProductDetail.css';
import ReviewsSection from '../../components/reviewsSection/ReviewsSection';
import Recommendations from '../../components/recommendations/Recommendations';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = productsData.find(item => item.id === parseInt(productId));

  const [activeImage, setActiveImage] = useState("");
  const [chosenColor, setChosenColor] = useState("");
  const [chosenSize, setChosenSize] = useState("");
  const [buyQuantity, setBuyQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(product.imageSrc);
      if (product.colors && product.colors.length > 0) {
        setChosenColor(product.colors[0]);
      }
      if (product.sizes && product.sizes.length > 0) {
        setChosenSize(product.sizes[0]);
      }
      setBuyQuantity(1);
      window.scrollTo(0, 0);
    }
  }, [productId, product]);

  if (!product) {
    return <div style={{ padding: "100px", textAlign: "center" }}>Product Not Found</div>;
  }

  const combinedImageStrip = product.gallery && product.gallery.length >= 2
    ? [product.imageSrc, ...product.gallery].slice(0, 3)
    : [
      product.imageSrc,
      product.imageSrc.replace('.png', '-back.png'),
      product.imageSrc.replace('.png', '-side.png')
    ];

  const renderStars = (ratingValue) => {
    const stars = [];
    const floorRating = Math.floor(ratingValue);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`pd-star-glyph ${i <= floorRating ? 'active-gold' : 'stale-grey'}`}>★</span>
      );
    }
    return stars;
  };

  const getColorName = (hexCode) => {
    const lowercaseHex = hexCode.toLowerCase();
    if (lowercaseHex === '#4f583d') return 'Olive Green';
    if (lowercaseHex === '#112d32') return 'Deep Forest Teal';
    if (lowercaseHex === '#3f2b3e') return 'Midnight Plum';
    if (lowercaseHex === '#334e68') return 'Resort Navy Blue';
    if (lowercaseHex === '#102a43') return 'Classic Dark Blue';
    if (lowercaseHex === '#627d98') return 'Slate Grey Tint';
    return hexCode;
  };

  const handleAddToCartFormSubmit = (e) => {
    e.preventDefault();
    const variationsCompositeIdKey = `${product.id}-${chosenColor.replace('#', '')}-${chosenSize}`;

    const shoppingCartPayloadItem = {
      cartItemId: variationsCompositeIdKey,
      id: product.id,
      name: product.name,
      price: product.price,
      imageSrc: product.imageSrc,
      selectedColorName: getColorName(chosenColor),
      selectedSize: chosenSize,
      quantity: buyQuantity
    };

    const activeStoredCartArray = JSON.parse(localStorage.getItem('shopCoCartRegistry')) || [];
    const existingCartItemIndex = activeStoredCartArray.findIndex(
      item => item.cartItemId === shoppingCartPayloadItem.cartItemId
    );

    if (existingCartItemIndex > -1) {
      activeStoredCartArray[existingCartItemIndex].quantity += buyQuantity;
    } else {
      activeStoredCartArray.push(shoppingCartPayloadItem);
    }

    localStorage.setItem('shopCoCartRegistry', JSON.stringify(activeStoredCartArray));
    setShowNotification(true);
  };

  return (
    <>
      <div className="shop-co-details-page-isolator">
        <div className="pd-central-bounds-box">
          {showNotification && (
            <div className="pd-toast-message-box-card">
              <div className="toast-content-wrapper-mesh">
                <span className="toast-success-vector-puck">✓</span>
                <div className="toast-text-labels-stack">
                  <span className="toast-bold-title">Item added to your cart!</span>
                  <span className="toast-sub-desc">Saved successfully inside global local storage.</span>
                </div>
              </div>
              <button type="button" className="toast-close-action-trigger" onClick={() => setShowNotification(false)}>✕</button>
            </div>
          )}

          <nav className="pd-breadcrumbs-row">
            <span className="bc-static">Home</span>
            <span className="bc-arrow">›</span>
            <span className="bc-static">Shop</span>
            <span className="bc-arrow">›</span>
            <span className="bc-static">Men</span>
            <span className="bc-arrow">›</span>
            <span className="bc-active-node">{(product.type || "T-shirt") + "s"}</span>
          </nav>

          <div className="product-showcase-main-grid">
            <div className="pd-gallery-reusable-component">
              <div className="pd-main-hero-canvas-frame">
                <img src={activeImage} alt={product.name} className="pd-hero-view-main-image-node" />
              </div>
              <div className="pd-thumbnails-strip-column">
                {combinedImageStrip.map((imageUrl, idx) => {
                  const isThisImageSelected = activeImage === imageUrl;
                  return (
                    <div
                      key={idx}
                      className={`pd-thumb-card-puck ${isThisImageSelected ? 'pd-active-border' : 'pd-inactive-border'}`}
                      onClick={() => setActiveImage(imageUrl)}
                    >
                      <img src={imageUrl} alt="thumbnail focus" className="pd-thumb-img-asset" onError={(e) => { e.target.src = product.imageSrc; }} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pd-text-specifications-panel-column">
              <h1 className="pd-main-brand-header-text">{product.name.toUpperCase()}</h1>
              <div className="pd-stars-rating-alignment-row">
                <div className="pd-gold-stars-mesh-box">{renderStars(product.rating)}</div>
                <span className="pd-numeric-score-label">{product.rating}/<span className="scale-max-val">5</span></span>
              </div>
              <div className="pd-pricing-alignment-row">
                <span className="pd-current-price-label">${product.price}</span>
                {product.originalPrice && <span className="pd-price-original-strikethrough-label">${product.originalPrice}</span>}
                {product.discount && <span className="pd-discount-percentage-badge-pill">{product.discount}</span>}
              </div>
              <p className="pd-product-short-description-copy">{product.description}</p>
              <div className="pd-section-break-line-stroke"></div>

              <form className="pd-buying-configuration-form-container" onSubmit={handleAddToCartFormSubmit}>
                <div className="pd-attribute-selection-group">
                  <span className="pd-attribute-group-title-label">Select Colors</span>
                  <div className="pd-color-circles-flex-row">
                    {product.colors && product.colors.map((colorHex, idx) => (
                      <div key={idx} className="pd-interactive-color-swatch-puck" style={{ backgroundColor: colorHex }} onClick={() => setChosenColor(colorHex)}>
                        {chosenColor === colorHex && <span className="pd-color-checkmark-vector-icon">✓</span>}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pd-section-break-line-stroke"></div>

                <div className="pd-attribute-selection-group">
                  <span className="pd-attribute-group-title-label">Choose Size</span>
                  <div className="pd-sizes-capsules-flex-row">
                    {product.sizes && product.sizes.map((sizeName, idx) => (
                      <button type="button" key={idx} className={`pd-size-capsule-button-puck ${chosenSize === sizeName ? 'pd-active-size-selected' : ''}`} onClick={() => setChosenSize(sizeName)}>{sizeName}</button>
                    ))}
                  </div>
                </div>
                <div className="pd-section-break-line-stroke"></div>

                <div className="pd-quantity-and-submission-action-row">
                  <div className="pd-math-step-counter-capsule-box">
                    <button type="button" className="pd-counter-math-btn" onClick={() => setBuyQuantity(p => p <= 1 ? 1 : p - 1)}>−</button>
                    <span className="pd-counter-numeric-display">{buyQuantity}</span>
                    <button type="button" className="pd-counter-math-btn" onClick={() => setBuyQuantity(p => p + 1)}>+</button>
                  </div>
                  <button type="submit" className="pd-add-to-cart-action-trigger-button-node">Add to Cart</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ReviewsSection />
      {/* FIXED: Pura product object pass kar rahe hain id ke bajaye */}
      <Recommendations currentProduct={product} /> 
    </>
  );
}
