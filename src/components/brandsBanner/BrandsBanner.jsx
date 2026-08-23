import React from 'react';
import BrandLogo from '../brandLogo/BrandLogo';
import './BrandsBanner.css';

export default function BrandsBanner() {
  // Pure JavaScript array of objects referencing your direct public paths
  const brandsData = [
    { id: 1, name: "Versace", src: "/images/brandNameSection/versace.png" },
    { id: 2, name: "Zara", src: "/images/brandNameSection/zara.png" },
    { id: 3, name: "Gucci", src: "/images/brandNameSection/gucci.png" },
    { id: 4, name: "Prada", src: "/images/brandNameSection/prada.png" },
    { id: 5, name: "Calvin Klein", src: "/images/brandNameSection/calvin_klein.png" }
  ];

  return (
    <div className="brands-banner-wrapper">
      <div className="brands-banner-container">
        {brandsData.map((brand) => (
          <BrandLogo 
            key={brand.id} 
            logoSrc={brand.src} 
            altText={brand.name} 
          />
        ))}
      </div>
    </div>
  );
}
