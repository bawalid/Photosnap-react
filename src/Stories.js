import React from "react";
import Nav from "./Components/Nav";
import Story from "./Components/Story";
import Footer from "./Components/Footer";
import data from "./data/stories.json";
import { Picture } from "react-responsive-picture";
import Arrow from "./Components/Btn_arrow";
import "./page styles/stories.scss";

import imageDesktop from "./assets/stories/desktop/moon-of-appalacia.jpg";
import imageTablet from "./assets/stories/tablet/moon-of-appalacia.jpg";
import imageMobile from "./assets/stories/mobile/moon-of-appalacia.jpg";

function Stories() {
  return (
    <div className='stories_page'>
      <Nav />
      <div className='stories_header_container'>
        <Picture
          className='stories_header'
          sources={[
            {
              srcSet: imageMobile,
              media: "(max-width: 584px)",
            },
            {
              srcSet: imageTablet,
              media: "(max-width: 768px)",
            },
            {
              srcSet: imageDesktop,
              media: "(min-width: 769px)",
            },
          ]}
        />
        <div className='stories_header_text'>
          <h5>LAST MONTH’S FEATURED STORY</h5>
          <h1>HAZY FULL MOON OF APPALACHIA</h1>
          <div className='stories_date_auth'>
            <p className='stories_date'>March 2nd 2020</p>
            <p className='stories_auth'>by John Appleseed</p>
          </div>
          <p className='stories_text'>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <Arrow BtnTheme='light' btnTitle='read the story' />
        </div>
      </div>
      <div className='stories'>
        {data.map((story, index) => (
          <Story
            key={index}
            imgDesktop={story.imageDesktop}
            imgTablet={story.imageTablet}
            imgMobile={story.imageMobile}
            date={story.date}
            title={story.title}
            auth={story.auth}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Stories;
