import React from 'react';
import './ResponseCard.css';

const ResponseCard = ({ content, dateRange, status, imageSrc }) => {
  return (
    <div className="card-response">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="card-inner-response">
        <img src={imageSrc} alt="Appartment" className="card-image" />
        <div className="card-text">{content}</div>
      </div>
    </div>
  );
};


export default ResponseCard;
