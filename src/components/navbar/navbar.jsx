import React, { useEffect, useState } from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import "./navbar.css";
import logo2 from "../../assets/bg-logo.png";
import menu from "../../assets/menu-icon.png";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo2} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={0} duration={500}>
            {" "}
            Home
          </Link>
        </li>

        <li>
          {" "}
          <Link to="program" smooth={true} offset={-260} duration={500}>
            {" "}
            Program{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about " smooth={true} offset={-150} duration={500}>
            About Us{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link to="campus" smooth={true} offset={-260} duration={500}></Link>
          Campus
        </li>
        <li>
          {" "}
          <Link
            to="testimonials"
            smooth={true}
            offset={-260}
            duration={500}
          ></Link>
          Testimonials
        </li>
        <li>
          {" "}
          <Link to="contact " smooth={true} offset={-60} duration={500}>
            {" "}
          </Link>
          <button className="btn"> Contact Us </button>{" "}
        </li>
      </ul>
      <img src={menu} alt="" className="menu-cn" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
