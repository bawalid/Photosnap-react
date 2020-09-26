import React from "react";
import "./styles/Header_banner.scss";
import { Picture } from "react-responsive-picture";
import BtnArrow from "./Btn_arrow";

function Header_banner({
  direction,
  theme,
  title,
  text,
  btnTitle,
  imgMobile,
  imgTablet,
  imgDesktop,
  position,
  id,
}) {
  return (
    <div
      className={`banner ${direction} ${theme} ${position ? position : ""}`}
      id={id}>
      <Picture
        className='banner_img'
        sources={[
          {
            srcSet: `${imgMobile}`,
            media: "(max-width: 584px)",
          },
          {
            srcSet: `${imgTablet}`,
            media: "(max-width: 768px)",
          },
          {
            srcSet: `${imgDesktop}`,
            media: "(min-width: 769px)",
          },
        ]}
      />
      <div className='banner_content'>
        <h1>{title}</h1>
        <p>{text}</p>
        {position !== "features_banner" && (
          <BtnArrow
            BtnTheme={theme === "dark" ? "light" : "dark"}
            btnTitle={btnTitle}
          />
        )}
      </div>
    </div>
  );
}

export default Header_banner;
