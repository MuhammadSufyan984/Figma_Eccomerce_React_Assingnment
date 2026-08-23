import React from 'react';
import Button from '../button/Button';
import StatCounter from '../statCounter/StatCounter';
import './Hero.css';

// Import your image directly as a variable here
// import heroImg from '../../images/hero_image.png';
// import vect2 from '../../images/Vector.png'; 

export default function Hero() {
  // Array of data objects mapped dynamically through props
  const statsData = [
    { id: 1, value: "200+", label: "International Brands" },
    { id: 2, value: "2,000+", label: "High-Quality Products" },
    { id: 3, value: "30,000+", label: "Happy Customers" }
  ];

  const handleShopNowClick = () => {
    alert("Navigating to shop catalog!");
  };

  return (
    <main className="hero-main-wrapper">
      <div className="hero-container">
        {/* Left Content Column */}
        <section className="hero-left-section">
          <h1 className="hero-heading">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          
          <p className="hero-paragraph">
            Browse through our diverse range of meticulously crafted garments, designed 
            to bring out your individuality and cater to your sense of style.
          </p>

          {/* Reusable Button component wrapper invocation */}
          <div className="hero-btn-container">
            <Button label="Shop Now" onClick={handleShopNowClick} />
          </div>

          {/* Dynamically mapped stat block elements */}
          <div className="hero-stats-row">
            {statsData.map((stat) => (
              <StatCounter 
                key={stat.id} 
                value={stat.value} 
                label={stat.label} 
              />
            ))}
          </div>
        </section>

        {/* Right Imagery Column */}
        <section className="hero-right-section">
          <div className="hero-image-container">
            {/* Replace with your local project public asset path or CDN location link */}
            <img 
              src="/images/heroSection/hero_image.png" 
              alt="Stylish couple wearing fashionable casual clothes" 
              className="hero-main-img"
            />
            {/* Vector sparkle graphics decoration */}
            {/* <div className="sparkle sparkle-large">✦</div> */}
            <div className="sparkle sparkle-large"><img src="/images/heroSection/v2.png" alt="star_image" /></div>
            <div className="sparkle sparkle-small"><img src="/images/heroSection/v.png" alt="star_image" /></div>
          </div>
        </section>

      </div>
    </main>
  );
}
