import React, { useState, useEffect } from 'react';
import './CartPage.css';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // 1. Initial mounting cycle extraction window safely loads state rows
  useEffect(() => {
    const activeStoredCartArray = JSON.parse(localStorage.getItem('shopCoCartRegistry')) || [];
    setCartItems(activeStoredCartArray);
    window.scrollTo(0, 0);
  }, []);

  // 2. Auxiliary update utility handler synchronization bridge 
  const updateLocalStorageAndState = (newCartItemsList) => {
    setCartItems(newCartItemsList);
    localStorage.setItem('shopCoCartRegistry', JSON.stringify(newCartItemsList));
  };

  // 3. Mathematical adjustments rules operators increment logic counter switcher
  const handleQuantityMutationModifier = (cartItemId, actionType) => {
    const updatedArrayMesh = cartItems.map(item => {
      if (item.cartItemId === cartItemId) {
        let newQuantity = item.quantity;
        if (actionType === 'plus') newQuantity += 1;
        if (actionType === 'minus') newQuantity = newQuantity <= 1 ? 1 : newQuantity - 1;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    updateLocalStorageAndState(updatedArrayMesh);
  };

  // 4. Absolute destruction registry filtering arrays mapping index handler
  const handleRemoveProductItemFromCartRegistry = (cartItemId) => {
    const filteredArrayRemains = cartItems.filter(item => item.cartItemId !== cartItemId);
    updateLocalStorageAndState(filteredArrayRemains);
  };

  // 5. COMPUTE SUMMATION TOTAL CALCULATIONS METRICS ENGINE
  const subtotalSumAmount = cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const discountReductionCalculation = subtotalSumAmount > 0 ? Math.round(subtotalSumAmount * 0.20) : 0;
  const flatDeliveryChargeFee = subtotalSumAmount > 0 ? 15 : 0;
  const compositeNetGrandTotalAmount = subtotalSumAmount - discountReductionCalculation + flatDeliveryChargeFee;

  return (
    <div className="shop-co-cart-page-framework-shell">
      <div className="cart-page-central-bounds-wrapper">
        
        {/* Breadcrumbs Section */}
        <nav className="cart-page-breadcrumbs-trail-row">
          <span className="bc-stale-node-label">Home</span>
          <span className="bc-arrow-split-node">›</span>
          <span className="bc-active-node-label">Cart</span>
        </nav>

        <h1 className="cart-page-main-hero-bold-heading-title">YOUR CART</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart-message-alert-box-card">
            <h2>Your shopping cart registry is empty!</h2>
            <p>Browse through our collections to populate items inside local storage entries slots.</p>
          </div>
        ) : (
          <div className="cart-page-split-dual-viewports-layout-grid">
            {/* LEFT ROW CANVAS PANEL GRID SHOWCASING ACTIVE LIST FILES */}
            <div className="cart-items-scroller-list-container-card">
              {cartItems.map((item, idx) => (
                <div key={item.cartItemId || idx} className="single-cart-item-row-card-box">
                  <div className="item-asset-canvas-thumbnail-frame">
                    <img 
                      src={item.imageSrc} 
                      alt={item.name} 
                      className="item-actual-image-node-asset"
                      onError={(e) => { e.target.src = "https://placehold.co"; }}
                    />
                  </div>

                  <div className="item-meta-details-text-vertical-stack">
                    <div className="item-header-meta-row-alignment">
                      <h3 className="item-brand-display-name-label">{item.name}</h3>
                      {/* Delete item trash button click event */}
                      <button 
                        type="button" 
                        className="item-trash-bin-destructive-action-trigger-btn"
                        onClick={() => handleRemoveProductItemFromCartRegistry(item.cartItemId)}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                      </button>
                    </div>

                    <p className="item-attribute-secondary-copy">Size: <span className="attr-val-node">{item.selectedSize || 'Medium'}</span></p>
                    <p className="item-attribute-secondary-copy">Color: <span className="attr-val-node">{item.selectedColorName || 'Standard'}</span></p>

                    <div className="item-pricing-and-counter-row-flexbox">
                      <span className="item-price-numeric-weight-label">${item.price}</span>
                      
                      {/* Counter inputs steps keys modifiers */}
                      <div className="item-math-counter-capsule-stepper-box">
                        <button type="button" className="counter-math-action-puck" onClick={() => handleQuantityMutationModifier(item.cartItemId, 'minus')}>−</button>
                        <span className="counter-current-numeric-display">{item.quantity}</span>
                        <button type="button" className="counter-math-action-puck" onClick={() => handleQuantityMutationModifier(item.cartItemId, 'plus')}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE ORDER SUMMARY BALANCE CARD PANELS FORM CONTROLLER BOX */}
            <div className="cart-order-summary-calculator-card-panel">
              <h2 className="summary-title-text-header">Order Summary</h2>
              
              <div className="summary-computational-rows-stack-list">
                <div className="calc-row-flexbox-item">
                  <span className="label-stale-grey-text">Subtotal</span>
                  <span className="val-bold-black-text">${subtotalSumAmount}</span>
                </div>
                
                <div className="calc-row-flexbox-item">
                  <span className="label-stale-grey-text">Discount (-20%)</span>
                  <span className="val-accent-red-text">-${discountReductionCalculation}</span>
                </div>
                
                <div className="calc-row-flexbox-item">
                  <span className="label-stale-grey-text">Delivery Fee</span>
                  <span className="val-bold-black-text">${flatDeliveryChargeFee}</span>
                </div>

                <div className="summary-section-divider-stroke-line"></div>

                <div className="calc-row-flexbox-item final-grand-total-row-specs">
                  <span className="grand-total-label">Total</span>
                  <span className="grand-total-numeric-value-weight">${compositeNetGrandTotalAmount}</span>
                </div>
              </div>

              {/* Promo input field row alignments framework */}
              <div className="summary-promo-code-submission-alignment-row">
                <div className="promo-input-field-wrapper-icon-mesh">
                  <span className="promo-tag-svg-vector-icon">🏷️</span>
                  <input type="text" placeholder="Add promo code" className="promo-native-input-node" />
                </div>
                <button type="button" className="promo-apply-submit-action-trigger-btn">Apply</button>
              </div>

              {/* Checkout link submit pipeline redirection buttons triggers */}
              <button type="button" className="checkout-pipeline-launch-action-button-node">
                <span>Go to Checkout</span>
                <span className="checkout-arrow-vector-icon">→</span>
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
