import React from 'react';
import './style.scss';

export default function Card({ children }) {
  return (
    <div className="card">
      <div className="container">{children}</div>
    </div>
  );
}
