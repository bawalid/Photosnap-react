import React from "react";
import { Picture } from "react-responsive-picture";
import { ReactComponent as Arrow } from "../assets/shared/desktop/arrow.svg";
import "./styles/Story.scss";
import { Link } from "react-router-dom";

function Story({ imgDesktop, imgTablet, imgMobile, title, auth, date }) {
  return (
    <Link to='/stories' className='story'>
      <Picture
        className='story_back'
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
      <div className='story_gradient'></div>
      <div className='story_content'>
        <p className='story_small'>{date}</p>
        <h4>{title}</h4>
        <p className='story_small'>{auth}</p>
        <hr />

        <div className='stroy_arrow'>
          <h5>Read Story</h5>
          <Arrow />
        </div>
      </div>
    </Link>
  );
}

export default Story;
