import React from 'react';
import { useNavigate } from 'react-router-dom'; // Router hooks for direct component redirection
import './BrowseByStyle.css';

export default function BrowseByStyle() {
  const navigate = useNavigate();

  const handleStyleNavigation = (styleSlugName) => {
    navigate(`/category/${styleSlugName}`);
  };

  return (
    <div className="browse-style-wrapper">
      <div className="browse-style-card-inner-box">
        <h2 className="browse-style-main-heading">BROWSE BY DRESS STYLE</h2>
        
        {/* EXACT CSS GRIDS ENGINE APPLIED */}
        <div className="browse-style-categories-grid">
          
          {/* Card 1: Casual (Short) */}
          <div 
            className="style-base-card-item style-card-short"
            onClick={() => handleStyleNavigation('casual')}
          >
            <h3 className="style-card-title-text">Casual</h3>
            <img 
              src="/images/browseByStyle/casual.png" 
              alt="Casual Dress Style" 
              className="style-card-image"
              onError={(e) => { e.target.src = "https://placehold.co"; }}
            />
          </div>

          {/* Card 2: Formal (Long) */}
          <div 
            className="style-base-card-item style-card-long"
            onClick={() => handleStyleNavigation('formal')}
          >
            <h3 className="style-card-title-text">Formal</h3>
            <img 
              src="/images/browseByStyle/formal.png" 
              alt="Formal Dress Style" 
              className="style-card-image"
              onError={(e) => { e.target.src = "https://placehold.co"; }}
            />
          </div>

          {/* Card 3: Party (Long) */}
          <div 
            className="style-base-card-item style-card-long"
            onClick={() => handleStyleNavigation('party')}
          >
            <h3 className="style-card-title-text">Party</h3>
            <img 
              src="/images/browseByStyle/party.png" 
              alt="Party Dress Style" 
              className="style-card-image"
              onError={(e) => { e.target.src = "https://placehold.co"; }}
            />
          </div>

          {/* Card 4: Gym (Short) */}
          <div 
            className="style-base-card-item style-card-short"
            onClick={() => handleStyleNavigation('gym')}
          >
            <h3 className="style-card-title-text">Gym</h3>
            <img 
              src="/images/browseByStyle/gym.png" 
              alt="Gym Dress Style" 
              className="style-card-image"
              onError={(e) => { e.target.src = "https://placehold.co"; }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
