import React from 'react';
import './StatCounter.css';

export default function StatCounter({ value, label }) {
  return (
    <div className="stat-counter-item">
      <h3 className="stat-value">{value}</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
}
