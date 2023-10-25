import React from 'react';
import '../css/Card.css'; 

const Card = ({ title, subTitle,description }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="title">
          <text>{title}</text><br/>
          <text style={{color:'#fff', paddingTop: '10px'}}>{subTitle}</text>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default Card;
