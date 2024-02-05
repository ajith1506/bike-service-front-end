import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustNav from "./CustNav";
import CustHome from "./CustHome";
import Bikes from "./Bikes";
import Services from "./Services";
import Login from "../Home/Login";
import Order from "./Order";
import MyBookings from "./MyBooking";
import Contact from "../Home/Contact";
import { authService } from "../../services/customer/authentication/auth_service";

function Cust_Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = authService.getCurrentCustomer();
    if (user === null) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <CustNav />
      <Routes>
        <Route path="*" element={<CustHome />} />
        <Route path="contact" element={<Contact />} />
        <Route path="bikes/:brand" element={<Bikes />} />
        <Route path="services/:bike" element={<Services />} />
        <Route
          path="order/bike/:bikeId/service/:serviceId"
          element={<Order />}
        />
        <Route path="mybookings" element={<MyBookings />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Cust_Home;
