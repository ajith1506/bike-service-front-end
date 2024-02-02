import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustNav from "./CustNav";
import CustHome from "./CustHome";
import Bikes from "./Bikes";
import Services from "./Services";
import Login from "../Home/Login";
import Order from "./Order";
import MyBookings from "./MyBooking";
import Contact from "../Home/Contact";
import AuthService from "../../services/customer/authentication/auth_service";

function Cust_Home(props) {
  useEffect(() => {
    const user = AuthService.getCurrentCustomer();
    if (user === null) {
      props.history.push("/login");
    }
  }, []);
  return (
    <div>
      <CustNav />
      <Routes>
        <Route exact path="/cust_home" component={CustHome} />
        <Route exact path="/cust_home/contact" component={Contact} />
        <Route
          exact
          path="/cust_home/bikes/:brand"
          render={(props) => <Bikes {...props} />}
        />
        <Route
          path="/cust_home/services/:bike"
          render={(props) => <Services {...props} />}
        />
        <Route
          path="/cust_home/order/bike/:bikeId/service/:serviceId"
          render={(props) => <Order {...props} />}
        />
        <Route
          path="/cust_home/mybookings"
          render={(props) => <MyBookings {...props} />}
        />
        <Route path="/login" component={Login} />
      </Routes>
    </div>
  );
}

export default Cust_Home;
