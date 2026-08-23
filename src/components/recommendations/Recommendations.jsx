import React from 'react';
import { productsData } from '../../data/productsData';
import ProductCard from '../newArrivals/ProductCard'; 
import './Recommendations.css';

const Recommendations = ({ currentProduct }) => {
  if (!currentProduct) return null;

  const currentType = currentProduct.type ? currentProduct.type.toLowerCase() : "";

  // 1. FILTER LOGIC: Same type ke items nikalain aur current open item ko skip kar dein
  const recommendedList = productsData.filter(item => {
    const itemType = item.type ? item.type.toLowerCase() : "";
    return itemType === currentType && item.id !== currentProduct.id;
  });

  // 2. FALLBACK LOGIC: Agar items 4 se kam hon, to baki items mix kar dein
  let finalDisplayItems = [...recommendedList];

  if (finalDisplayItems.length < 4) {
    const fallbackItems = productsData.filter(item => {
      const itemType = item.type ? item.type.toLowerCase() : "";
      return item.id !== currentProduct.id && itemType !== currentType;
    });
    
    finalDisplayItems = [...finalDisplayItems, ...fallbackItems];
  }

  const filteredFourCards = finalDisplayItems.slice(0, 4);

  return (
    <div className="recommendations-outer-wrapper">
      <div className="recommendations-container">
        <h2 className="recommendations-heading">YOU MIGHT ALSO LIKE</h2>
        <div className="recommendations-grid">
          {filteredFourCards.map((item) => (
            /* FIXED: Yahan har ek property ko alag alag spread/pass kiya hai taaki ProductCard dhoond sake */
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
