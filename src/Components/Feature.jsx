import React from "react";
import "./styles/Feature.scss";

function Feature({ image, title, text }) {
  return (
    <div className='feature'>
      <img src={image} alt='' />
      <div className='feature_content'>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;
