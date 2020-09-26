import React, { useState, useEffect } from "react";
import BtnStd from "./Btn_Std";
import { gsap } from "gsap";
import HamburgerMenu from "react-hamburger-menu";
import "./styles/Nav.scss";
import logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  const [open, setopen] = useState(false);
  const ToggleHamburger = () => {
    setopen(!open);
  };
  useEffect(() => {
    if (open) {
      gsap.to(".mobile_menu", { duration: 0.5, top: 72, ease: "power4.out" });
    } else {
      gsap.to(".mobile_menu", { duration: 0.5, top: -200, ease: "power4.out" });
    }
  }, [open]);
  return (
    <div className='navbar'>
      <div className='navbar_container'>
        <Link to='/' className='navbar_logo'>
          <img src={logo} alt='logo' />
        </Link>
        <div className='navbar_items'>
          <ul>
            <Link to='/stories'>
              <li>stories</li>
            </Link>
            <Link to='/features'>
              <li>features</li>
            </Link>
            <Link to='/pricing'>
              <li>pricing</li>
            </Link>
          </ul>
        </div>

        <div className='navbar_btn'>
          <BtnStd btn_style='dark' btn_title='get an invite' />
        </div>
        <HamburgerMenu
          className='hamburger_menu'
          isOpen={open}
          menuClicked={ToggleHamburger}
          width={20}
          height={11}
          strokeWidth={1}
          rotate={0}
          color='black'
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>

      <div className='mobile_menu'>
        <div className='mobile_items'>
          <ul>
            <Link to='/stories'>
              <li>stories</li>
            </Link>
            <Link to='/features'>
              <li>features</li>
            </Link>
            <Link to='/pricing'>
              <li>pricing</li>
            </Link>
          </ul>
          <hr />
          <BtnStd btn_style='dark' btn_title='get an invite' />
        </div>
      </div>
      <div
        className='background_overlay'
        style={{
          opacity: open ? 1 : 0,
          display: open ? "inline" : "none",
        }}></div>
    </div>
  );
}

export default Nav;
