import React from 'react';
import './Button.css';

export default function Button({ label, onClick, type = 'button' }) {
  return (
    <button type={type} className="custom-shared-btn" onClick={onClick}>
      {label}
    </button>
  );
}
