import React from "react";
import "./styles/Btn_std.scss";

function Btn_Std({ btn_style, btn_title }) {
  return (
    <div className={`btn_std ${btn_style}`}>
      <h5>{btn_title}</h5>
    </div>
  );
}

export default Btn_Std;
