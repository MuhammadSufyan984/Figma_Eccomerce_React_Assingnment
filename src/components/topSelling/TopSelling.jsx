// src/components/TopSelling/TopSelling.jsx
import React from 'react';
import ProductCard from '../newArrivals/ProductCard'; // Reusing your exact card presentation file
import { productsData } from '../../data/productsData'; // Reading from the central industry-standard data path
import './TopSelling.css';


export default function TopSelling() {
  // Extract and filter only the items flagged under the top selling tracker category
  const topSellingProducts = productsData.filter(item => item.category === "top-selling");

  return (
    <section className="top-selling-section-wrapper">
      <div className="top-selling-inner-container">
        
        {/* Section Heading Title Header */}
        <h2 className="top-selling-main-heading">TOP SELLING</h2>
        
        {/* Responsive Grid Layout Workspace */}
        <div className="top-selling-products-grid">
          {topSellingProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rating={product.rating}
              imageSrc={product.imageSrc}
            />
          ))}
        </div>

        {/* View All Action Trigger Button Row */}
        <div className="ts-view-all-btn-holder">
          <button className="ts-view-all-action-trigger">View All</button>
        </div>

      </div>
    </section>
  );
}
