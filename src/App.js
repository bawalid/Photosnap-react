import React, { useEffect } from "react";
import Nav from "./Components/Nav";
import HeaderBanner from "./Components/Header_banner";
import Story from "./Components/Story";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Rainbow from "./Components/Rainbow";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./page styles/home.scss";

import Resonsive from "./assets/features/desktop/responsive.svg";
import NoLimit from "./assets/features/desktop/no-limit.svg";
import Embed from "./assets/features/desktop/embed.svg";

import data from "./data/stories.json";

import imgDesktopShare from "./assets/home/desktop/create-and-share.jpg";
import imgTabletShare from "./assets/home/tablet/create-and-share.jpg";
import imgMobileShare from "./assets/home/mobile/create-and-share.jpg";

import imgDesktopStory from "./assets/home/desktop/beautiful-stories.jpg";
import imgTabletStory from "./assets/home/tablet/beautiful-stories.jpg";
import imgMobileStory from "./assets/home/mobile/beautiful-stories.jpg";

import imgDesktopDesign from "./assets/home/desktop/designed-for-everyone.jpg";
import imgTabletDesign from "./assets/home/tablet/designed-for-everyone.jpg";
import imgMobileDesign from "./assets/home/mobile/designed-for-everyone.jpg";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const data_reduced = data.slice(0, 4);

  useEffect(() => {
    const stories = [...document.querySelectorAll(".story")];
    const features = [...document.querySelectorAll(".feature")];
    const animateHeader1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#header1",
        start: "top center",
        scrub: true,
      },
    });
    const animateHeader2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#header2",
        start: "top center",
        scrub: true,
      },
    });
    const animateHeader3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#header3",
        start: "top center",
        scrub: true,
      },
    });
    const animateFeatures = gsap.timeline({
      scrollTrigger: {
        trigger: ".features",
        start: "top center",
      },
    });

    if (window.innerWidth > 950) {
      stories.map((story, index) =>
        gsap.from(story, {
          scrollTrigger: {
            trigger: ".stories_preview",
            start: "center bottom",
          },
          opacity: 0,
          y: 50 * (index + 1),
          duration: 1,
        })
      );

      features.map((feature) =>
        animateFeatures.fromTo(
          feature,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          }
        )
      );

      animateHeader1.fromTo(
        "#header1 .banner_img",
        {
          scale: 1,
          y: 0,
        },
        {
          scale: 1.5,
          y: 50,
          duration: 0.5,
        }
      );

      animateHeader2.fromTo(
        "#header2 .banner_img",
        {
          scale: 1,
          y: 0,
        },
        {
          scale: 1.5,
          y: 50,
          duration: 0.5,
        }
      );

      animateHeader3.fromTo(
        "#header3 .banner_img",
        {
          scale: 1,
          y: 0,
        },
        {
          scale: 1.5,
          y: 50,
          duration: 0.5,
        }
      );
    }
  }, []);

  return (
    <div className='App'>
      <Nav />
      <Rainbow />
      <HeaderBanner
        id='header1'
        direction='left'
        theme='dark'
        position='main'
        title='Create and share your photo stories.'
        text='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
        imgDesktop={imgDesktopShare}
        imgTablet={imgTabletShare}
        imgMobile={imgMobileShare}
        btnTitle='Get an invite'
      />
      <HeaderBanner
        id='header2'
        direction='right'
        theme='light'
        title='Beautiful stories every time'
        text='We provide design templates to ensure your stories look terrific. Easily add 
        photos, text, embed maps and media from other networks. Then share your story 
        with everyone.'
        imgDesktop={imgDesktopStory}
        imgTablet={imgTabletStory}
        imgMobile={imgMobileStory}
        btnTitle='View the stories'
      />
      <HeaderBanner
        id='header3'
        direction='left'
        theme='light'
        title='Designed for everyone'
        text='Photosnap can help you create stories that resonate with your audience.  Our 
        tool is designed for photographers of all levels, brands, businesses you name it.'
        imgDesktop={imgDesktopDesign}
        imgTablet={imgTabletDesign}
        imgMobile={imgMobileDesign}
        btnTitle='View the stories'
      />
      <div className='stories_preview'>
        {data_reduced.map((story, index) => (
          <Story
            key={index}
            imgDesktop={story.imageDesktop}
            imgTablet={story.imageTablet}
            imgMobile={story.imageMobile}
            title={story.title}
            auth={story.auth}
          />
        ))}
      </div>
      <section className='features'>
        <Feature
          image={Resonsive}
          title='100% Responsive'
          text='No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.'
        />
        <Feature
          image={NoLimit}
          title='No Photo Upload Limit'
          text='Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
        />
        <Feature
          image={Embed}
          title='Available to Embed'
          text='Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. '
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
