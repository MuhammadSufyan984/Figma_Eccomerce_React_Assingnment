import React, { useState } from 'react';
import { reviewsData } from '../../data/reviewsData';
import './ReviewsSection.css'; // Importing the separate localized CSS file directly

// Reusable individual Card Layout receiving dynamic inputs
const ReviewCard = ({ rating, name, verified, comment, date }) => {
  return (
    <div className="review-card">
      <div className="card-header">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>★</span>
          ))}
        </div>
        <button className="more-options-btn">•••</button>
      </div>
      
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        {verified && (
          <span className="verified-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
        )}
      </div>
      
      <p className="user-comment">"{comment}"</p>
      <p className="posted-date">Posted on {date}</p>
    </div>
  );
};

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState('rating');

  return (
    <div className="reviews-section-container">
      {/* Tab Navigation Header Controls */}
      <div className="tabs-header">
        <button 
          className={`tab-btn ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          Product Details
        </button>
        <button 
          className={`tab-btn ${activeTab === 'rating' ? 'active' : ''}`}
          onClick={() => setActiveTab('rating')}
        >
          Rating & Reviews
        </button>
        <button 
          className={`tab-btn ${activeTab === 'faqs' ? 'active' : ''}`}
          onClick={() => setActiveTab('faqs')}
        >
          FAQs
        </button>
      </div>

      {activeTab === 'rating' && (
        <>
          {/* Section Action Header */}
          <div className="controls-row">
            <div className="reviews-count">
              <h2>All Reviews <span className="count-span">({reviewsData.length})</span></h2>
            </div>
            
            <div className="actions-buttons">
              {/* Filter Tool Wrapper */}
              <button className="filter-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line>
                  <line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line>
                  <line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line>
                  <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
              </button>
              
              {/* Selector Sorting Field Dropdown */}
              <div className="sort-dropdown">
                <select defaultValue="latest">
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
              
              {/* Trigger Creation Launch Action Button */}
              <button className="write-review-btn">Write a Review</button>
            </div>
          </div>

          {/* Grid Container Matrix mapping array iterations */}
          <div className="reviews-grid">
            {reviewsData.map((review) => (
              <ReviewCard 
                key={review.id}
                rating={review.rating}
                name={review.name}
                verified={review.verified}
                comment={review.comment}
                date={review.date}
              />
            ))}
          </div>

          {/* Load More List Extension Action Button */}
          <div className="load-more-container">
            <button className="load-more-btn">Load More Reviews</button>
          </div>
        </>
      )}

      {activeTab === 'details' && <div className="tab-content-placeholder">Product Information Specification Sheet Overview</div>}
      {activeTab === 'faqs' && <div className="tab-content-placeholder">Frequently Asked Questions Directory Center</div>}
    </div>
  );
};

export default ReviewsSection;
