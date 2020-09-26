import React from "react";
import "./styles/PriceCard.scss";
import Rainbow from "./Rainbow";
import Btn from "./Btn_Std";

function PriceCard({ pro, price, priceTime, packName, packDescription }) {
  return (
    <div className={`price_card ${pro ? "pro" : ""}`}>
      {pro && <Rainbow />}
      <div className='package_name'>
        <h3>{packName}</h3>
        <p>{packDescription}</p>
      </div>
      <div className='package_price'>
        <h1>{price}</h1>
        <p>{priceTime}</p>
      </div>
      <Btn btn_style={pro ? "light" : "dark"} btn_title='pick plan' />
    </div>
  );
}

export default PriceCard;
