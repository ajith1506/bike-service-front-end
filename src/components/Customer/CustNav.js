import React, { useEffect, useState } from "react";
import "../Home/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { authService } from "../../services/customer/authentication/auth_service";

function CustNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const logout = () => {
    authService.logout();
  };

  return (
    <nav className={`nav ${show && "nav__scroll"}`}>
      <a href="/cust_home">
        <img
          className="nav__logo"
          src="https://th.bing.com/th?id=OIP.h9TPBbXhbPrn09iCMtJS1wAAAA&w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2.jpg"
          alt="YAMAHA LOGO"
        />
      </a>
      <div
        className={`nav__container nav__borderXwidth ${
          show && "nav__containerscroll nav__borderXwidthscroll"
        }`}
      >
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/cust_home"
        >
          HOME
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/cust_home/contact"
        >
          CONTACT US
        </NavLink>
        <NavLink
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/cust_home/mybookings"
        >
          MY BOOKINGS
        </NavLink>
        <NavLink
          onClick={logout}
          className={`nav__link ${show && "nav__linkscroll"}`}
          to="/login"
        >
          LOGOUT
        </NavLink>
      </div>
    </nav>
  );
}

export default CustNav;
