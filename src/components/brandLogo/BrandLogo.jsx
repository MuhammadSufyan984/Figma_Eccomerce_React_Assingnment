import React from 'react';
import './BrandLogo.css';

export default function BrandLogo({ logoSrc, altText }) {
  return (
    <div className="brand-logo-item">
      <img src={logoSrc} alt={`${altText} official logo`} className="brand-logo-img" />
    </div>
  );
}
