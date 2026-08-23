// src/components/Footer/Footer.jsx
import React, { useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    alert(`Thank you for subscribing! Newsletter link sent to: ${emailInput}`);
    setEmailInput("");
  };

  // Structured data array containing your footers dynamic route linkages mapping data
  const footerNavigationBlocks = [
    {
      title: "COMPANY",
      links: ["About", "Features", "Works", "Career"]
    },
    {
      title: "HELP",
      links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]
    },
    {
      title: "FAQ",
      links: ["Account", "Manage Deliveries", "Orders", "Payments"]
    },
    {
      title: "RESOURCES",
      links: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]
    }
  ];

  return (
    <footer className="footer-global-wrapper">
      <div className="footer-inner-alignment-box">
        
        {/* ==========================================================================
           1. THE OVERLAPPING NEWSLETTER INVITATION BADGE
           ========================================================================== */}
        <div className="newsletter-floating-badge">
          <h2 className="newsletter-badge-cta-text">
            STAY UP TO DATE ABOUT<br />OUR LATEST OFFERS
          </h2>
          
          <form className="newsletter-badge-input-form" onSubmit={handleSubscribeSubmit}>
            <div className="newsletter-input-field-icon-wrapper">
              <span className="email-envelope-vector-icon">✉</span>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-text-input-node"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="newsletter-submit-action-trigger">
              Subscribe to Newsletter
            </button>
          </form>
        </div>

        {/* ==========================================================================
           2. THE LOWER DIRECTORY NETWORK INDEX GRID 
           ========================================================================== */}
        <div className="footer-main-directory-grid">
          
          {/* Brand Presentation Meta Box Column */}
          <div className="footer-brand-summary-column">
            <h1 className="footer-brand-logo-text">SHOP.CO</h1>
            <p className="footer-brand-description-text">
              We have clothes that suit your style and which you're proud to wear. From browse layouts to checkout tracks.
            </p>
            {/* Social Media Vectors Row */}
            <div className="footer-social-icons-row">
              <span className="social-icon-circle-puck" title="Twitter Profile"><img src="/images/footer/logo/twitter.png" alt="tw" /></span>
              <span className="social-icon-circle-puck social-icon-black-bg" title="Facebook Page"><img src="/images/footer/logo/fb.png" alt="fb" /></span>
              <span className="social-icon-circle-puck" title="Instagram Feed"><img src="/images/footer/logo/insta.png" alt="ins" /></span>
              <span className="social-icon-circle-puck" title="Pinterest Pinboard"><img src="/images/footer/logo/github.png" alt="t" /></span>
            </div>
          </div>

          {/* Dynamic Link Directory Matrix mapping layout column row elements */}
          {footerNavigationBlocks.map((block, index) => (
            <div key={index} className="footer-navigation-link-column">
              <h3 className="footer-column-heading-title">{block.title}</h3>
              <ul className="footer-column-bullet-list">
                {block.links.map((linkName, linkIndex) => (
                  <li key={linkIndex} className="footer-bullet-item-link">
                    <span className="footer-pseudo-anchor-element">{linkName}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ==========================================================================
           3. LEGAL COPYRIGHT REVIEWS AND CREDIT CARDS MATRIX BAR
           ========================================================================== */}
        <div className="footer-horizontal-divider-line"></div>
        
        <div className="footer-compliance-row">
          <p className="footer-copyright-text-label">
            SHOP.CO © 2000-2026, All Rights Reserved
          </p>
          
          {/* Unified Merchant payment cards graphics badges mesh indicators row links */}
          <div className="footer-payment-badges-row">
            {/* <span className="payment-card-badge-puck visa-tint" title="Visa Card Network"><img src="/images/footer/badge/visa.png" alt="visa" /></span> */}
            {/* <span className="payment-card-badge-puck mastercard-tint" title="Mastercard Network">Mastercard</span> */}
            {/* <span className="payment-card-badge-puck paypal-tint" title="Paypal Portal Wallet">PayPal</span> */}
            {/* <span className="payment-card-badge-puck applepay-tint" title="Apple Pay System"> Pay</span> */}
            {/* <span className="payment-card-badge-puck googlepay-tint" title="Google Pay Node">G Pay</span> */}
            <img src="/images/footer/badge/visa.png" alt="visa" />
            <img src="/images/footer/badge/master.png" alt="master" />
            <img src="/images/footer/badge/paypal.png" alt="visa" />
            <img src="/images/footer/badge/pay.png" alt="visa" />
            <img src="/images/footer/badge/gpay.png" alt="visa" />
          </div>
        </div>

      </div>
    </footer>
  );
}
