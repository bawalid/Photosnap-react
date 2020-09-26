import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import HeaderBanner from "./Components/Header_banner";
import Rainbow from "./Components/Rainbow";
import Footer from "./Components/Footer";
import BetaInvite from "./Components/BetaInvite";
import PriceCard from "./Components/PriceCard";

import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import "./page styles/pricing.scss";

import imgDesktop from "./assets/pricing/desktop/hero.jpg";
import imgTablet from "./assets/pricing/tablet/hero.jpg";
import imgMobile from "./assets/pricing/mobile/hero.jpg";
import Check from "./assets/pricing/desktop/check.svg";

const rows = [
  ["UNLIMITED STORY POSTING", Check, Check, Check],
  ["UNLIMITED PHOTO UPLOAD", Check, Check, Check],
  ["EMBEDDING CUSTOM CONTENT", "", Check, Check],
  ["CUSTOMIZE METADATA", "", Check, Check],
  ["ADVANCED METRICS", "", "", Check],
  ["PHOTO DOWNLOADS", "", "", Check],
  ["SEARCH ENGINE INDEXING", "", "", Check],
  ["CUSTOM ANALYTICS", "", "", Check],
];

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 64,
    height: 32,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 4,
    color: theme.palette.common.black,
    "&$checked": {
      transform: "translateX(31px)",
      padding: 4,
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: theme.palette.common.black,
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: theme.palette.common.black,
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 32,
    backgroundColor: "#DFDFDF",
    opacity: 1,
    transition: theme.transitions.create(["background-color"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function Pricing() {
  const [mobile, setmobile] = useState(false);
  const [year, setYear] = useState(false);
  const pricing = {
    basic: [19, 190],
    pro: [39, 390],
    business: [99, 990],
  };
  const handleChange = (event) => {
    setYear(!year);
  };

  useEffect(() => {
    if (window.innerWidth > 584) {
      setmobile(false);
    } else {
      setmobile(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 584) {
        setmobile(false);
      } else {
        setmobile(true);
      }
    });
  }, []);
  return (
    <div className='pricing_page'>
      <Nav />
      <Rainbow />
      <HeaderBanner
        direction='left'
        theme='dark'
        position='features_banner'
        title='PRICING'
        text='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
        imgDesktop={imgDesktop}
        imgTablet={imgTablet}
        imgMobile={imgMobile}
      />
      <section className='price_selection'>
        <Typography component='div' className='switching'>
          <Grid component='label' container alignItems='center' spacing={1}>
            <Grid item style={{ opacity: year ? 0.5 : 1 }}>
              Monthly
            </Grid>
            <Grid item>
              <IOSSwitch
                checked={year}
                onChange={handleChange}
                name='checkYear'
              />
            </Grid>
            <Grid item style={{ opacity: year ? 1 : 0.5 }}>
              Yearly
            </Grid>
          </Grid>
        </Typography>
        <div className='price_cards'>
          <PriceCard
            packName='Basic'
            packDescription='Includes basic usage of our platform. Recommended for new and aspiring photographers.'
            price={
              year
                ? `$${(Math.round(pricing.basic[1] * 100) / 100).toFixed(2)}`
                : `$${(Math.round(pricing.basic[0] * 100) / 100).toFixed(2)}`
            }
            priceTime={year ? "per year" : "per month"}
          />
          <PriceCard
            pro
            packName='Pro'
            packDescription='More advanced features available. Recommended for photography veterans and professionals.'
            price={
              year
                ? `$${(Math.round(pricing.pro[1] * 100) / 100).toFixed(2)}`
                : `$${(Math.round(pricing.pro[0] * 100) / 100).toFixed(2)}`
            }
            priceTime={year ? "per year" : "per month"}
          />
          <PriceCard
            packName='Business'
            packDescription='Additional features available such as more detailed metrics. Recommended for business owners.'
            price={
              year
                ? `$${(Math.round(pricing.business[1] * 100) / 100).toFixed(2)}`
                : `$${(Math.round(pricing.business[0] * 100) / 100).toFixed(2)}`
            }
            priceTime={year ? "per year" : "per month"}
          />
        </div>
        <div className='price_table_container'>
          <h1>Compare</h1>
          {!mobile ? (
            <table className='price_table'>
              <thead>
                <tr className='table_header'>
                  <th align='left'>The features</th>
                  <th align='center'>Basic</th>
                  <th align='center'>Pro</th>
                  <th align='center'>Business</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr className='table_body' key={index}>
                    <td align='left'>{row[0]}</td>
                    <td align='center'>
                      <img src={row[1]} alt='' />
                    </td>
                    <td align='center'>
                      <img src={row[2]} alt='' />
                    </td>
                    <td align='center'>
                      <img src={row[3]} alt='' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className='price_table'>
              <thead>
                <tr className='table_header'>
                  <th align='left' colSpan='3'>
                    The features
                  </th>
                </tr>
              </thead>

              {rows.map((row, index) => (
                <tbody className='table_body' key={index}>
                  <tr className='table_package_title'>
                    <th align='left' colSpan='3'>
                      {row[0]}
                    </th>
                  </tr>

                  <tr className='table_package_name'>
                    <td align='left'>Basic</td>
                    <td align='left'>Pro</td>
                    <td align='left'>Business</td>
                  </tr>
                  <tr className='table_package_check'>
                    <td align='left'>
                      <img src={row[1]} alt='' />
                    </td>
                    <td align='left'>
                      <img src={row[2]} alt='' />
                    </td>
                    <td align='left'>
                      <img src={row[3]} alt='' />
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          )}
        </div>
      </section>
      <BetaInvite />
      <Footer />
    </div>
  );
}

export default Pricing;
