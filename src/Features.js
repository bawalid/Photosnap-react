import React, { useEffect } from "react";
import Nav from "./Components/Nav";
import HeaderBanner from "./Components/Header_banner";
import Rainbow from "./Components/Rainbow";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import BetaInvite from "./Components/BetaInvite";
import "./page styles/features.scss";

import imgDesktop from "./assets/features/desktop/hero.jpg";
import imgTablet from "./assets/features/tablet/hero.jpg";
import imgMobile from "./assets/features/mobile/hero.jpg";

import Resonsive from "./assets/features/desktop/responsive.svg";
import NoLimit from "./assets/features/desktop/no-limit.svg";
import Embed from "./assets/features/desktop/embed.svg";
import Domain from "./assets/features/desktop/custom-domain.svg";
import Exposure from "./assets/features/desktop/boost-exposure.svg";
import Drag from "./assets/features/desktop/drag-drop.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  useEffect(() => {
    const features = [...document.querySelectorAll(".feature")];

    const animateHeader = gsap.timeline({
      scrollTrigger: {
        trigger: "banner",
        scrub: true,
      },
    });

    const animateFeatures = gsap.timeline({
      scrollTrigger: {
        trigger: ".features_page_container",
        start: "top center",
      },
    });

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
    animateHeader.fromTo(
      ".banner_img",
      {
        scale: 1,
      },
      {
        scale: 1.5,
        duration: 0.5,
      }
    );
  }, []);
  return (
    <div className='features_page'>
      <Nav />
      <Rainbow />
      <HeaderBanner
        direction='left'
        theme='dark'
        position='features_banner'
        title='FEATURES'
        text='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
        imgDesktop={imgDesktop}
        imgTablet={imgTablet}
        imgMobile={imgMobile}
      />
      <section className='features_page_container'>
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
        <Feature
          image={Domain}
          title='Custom Domain'
          text='With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! '
        />
        <Feature
          image={Exposure}
          title='Boost Your Exposure'
          text='Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list. '
        />
        <Feature
          image={Drag}
          title='Drag & Drop Image'
          text='Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories. '
        />
      </section>
      <BetaInvite />
      <Footer />
    </div>
  );
}

export default Features;
