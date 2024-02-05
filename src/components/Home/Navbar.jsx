import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        console.log("");
      });
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__scroll"}`}>
      <a href="/">
        <img
          className="nav__logo"
          src="https://th.bing.com/th?id=OIP.h9TPBbXhbPrn09iCMtJS1wAAAA&w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2.jpg"
          alt="YAMAHA"
        />
      </a>
      <div
        className={`nav__container nav__borderXwidth ${
          show && "nav__containerscroll nav__borderXwidthscroll"
        }`}
      >
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/whyus"
        >
          WHY US?
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/working"
        >
          HOW IT WORKS
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/contact"
        >
          CONTACT US
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/login"
        >
          LOGIN
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
