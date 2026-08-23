import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard(props) {
  // FIXED: Destructuring multiple safety fallback keys from variations
  const id = props.id || props.product?.id;
  const name = props.name || props.product?.name;
  const price = props.price || props.product?.price;
  const rating = props.rating || props.product?.rating;
  
  // Checking data objects structural keys variations safely
  const originalPrice = props.originalPrice || props.product?.originalPrice;
  const discount = props.discount || props.product?.discount;
  const imageSrc = props.imageSrc || props.product?.imageSrc;
  
  const renderStars = (ratingValue) => {
    const stars = [];
    const floorRating = Math.floor(ratingValue);
    const hasHalf = ratingValue % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<span key={i} className="star-icon full-star">★</span>);
      } else if (i === floorRating + 1 && hasHalf) {
        stars.push(
          <span key={i} className="star-icon half-star-wrapper">
            <span className="half-star-bg">★</span>
            <span className="half-star-fg">★</span>
          </span>
        );
      } else {
        stars.push(<span key={i} className="star-icon empty-star">★</span>);
      }
    }
    return stars;
  };

  return (
    <Link to={`/product/${id}`} className="product-card-link-wrapper">
      <div className="product-card-container">
        
        <div className="product-img-frame">
          <img src={imageSrc} alt={name} className="product-main-asset" />
        </div>

        <div className="product-info-block">
          <h3 className="product-title-text">{name}</h3>
          
          <div className="product-rating-row">
            <div className="stars-wrapper">
              {renderStars(rating)}
            </div>
            <span className="rating-numeric-value">
              {rating}/<span className="max-rating-scale">5</span>
            </span>
          </div>

          <div className="product-price-row">
            <span className="product-current-price">${price}</span>
            {/* FIXED: Added strict logic check to render layout nodes if values exist */}
            {originalPrice && (
              <span className="product-original-price">${originalPrice}</span>
            )}
            {discount && (
              <span className="product-discount-badge">{discount}</span>
            )}
          </div>

        </div>

      </div>
    </Link>
  );
}
