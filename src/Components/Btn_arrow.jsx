import React from "react";
import "./styles/Btn_arrow.scss";
import { ReactComponent as Arrow } from "../assets/shared/desktop/arrow.svg";

function Btn_arrow({ BtnTheme, btnTitle }) {
  return (
    <div className={`btn_arrow ${BtnTheme}`}>
      <h5>{btnTitle}</h5>
      <Arrow />
    </div>
  );
}

export default Btn_arrow;
