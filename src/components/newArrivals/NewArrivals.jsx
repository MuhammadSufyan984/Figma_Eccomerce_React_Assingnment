import React from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../../data/productsData';
import './NewArrivals.css';

export default function NewArrivals() {
  const newArrivalsProducts = productsData.filter(
    item => item.category === "new-arrivals"
  );

  return (
    <section className="new-arrivals-section-wrapper">
      <div className="new-arrivals-inner-container">
        <h2 className="new-arrivals-main-heading">NEW ARRIVALS</h2>
        <div className="new-arrivals-products-grid">
          {newArrivalsProducts.map((product) => (
            /* FIXED: Applied JavaScript Spread Operator to pass all attributes safely */
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
        <div className="view-all-btn-holder">
          <button className="view-all-action-trigger">View All</button>
        </div>
      </div>
    </section>
  );
}
