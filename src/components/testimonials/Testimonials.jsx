// src/components/Testimonials/Testimonials.jsx
import React, { useState } from 'react';
import { reviewsData } from '../../data/productsData';
import './Testimonials.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxSlidesMobile = reviewsData.length - 1;
  const maxSlidesDesktop = reviewsData.length - 3; // Shows 3 visible cards in the center desktop view

  const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  const handleNextSlide = () => {
    const limit = window.innerWidth >= 992 ? maxSlidesDesktop : maxSlidesMobile;
    setCurrentIndex((prev) => (prev >= limit ? prev : prev + 1));
  };

  return (
    /* The main wrapper now holds the absolute edge masks for the entire browser view width */
    <section className="testimonials-section-wrapper">
      
      {/* 1. Edge Mask Overlays moved OUTSIDE the inner container to the far screen edges */}
      <div className="fade-mask-left"></div>
      <div className="fade-mask-right"></div>

      <div className="testimonials-inner-container">
        
        {/* Navigation Action Header Row */}
        <div className="testimonials-header-row">
          <h2 className="testimonials-main-heading">OUR HAPPY CUSTOMERS</h2>
          
          <div className="slider-control-arrows-box">
            <button 
              className={`arrow-btn ${currentIndex === 0 ? 'arrow-disabled' : ''}`} 
              onClick={handlePrevSlide}
              aria-label="Previous testimonials page"
            >
              ←
            </button>
            <button 
              className={`arrow-btn ${
                currentIndex >= (window.innerWidth >= 992 ? maxSlidesDesktop : maxSlidesMobile) 
                  ? 'arrow-disabled' 
                  : ''
              }`} 
              onClick={handleNextSlide}
              aria-label="Next testimonials page"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Viewing Portal Mask Window */}
        <div className="testimonials-carousel-view-portal">
          <div 
            className="testimonials-flex-scroll-track"
            style={{ transform: `translateX(-${currentIndex * (window.innerWidth >= 992 ? 35.33 : 100)}%)` }}
          >
            {reviewsData.map((review) => (
              <div key={review.id} className="testimonial-card-item">
                
                {/* Golden Star Matrix Rows */}
                <div className="testimonial-stars-row">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span 
                      key={index} 
                      className={`t-star ${index < Math.floor(review.rating) ? 't-full' : 't-empty'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Customer Name with Verified Buyer Check Badge */}
                <div className="testimonial-author-row">
                  <h3 className="testimonial-author-name">{review.author}</h3>
                  {review.verified && (
                    <span className="verified-checkmark-badge" title="Verified Buyer Account">✓</span>
                  )}
                </div>

                {/* Review Text Body Paragraph */}
                <p className="testimonial-feedback-paragraph">{review.text}</p>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
