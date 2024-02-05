import React from "react";
import MechanicNav from "./MechanicNav";
import MechanicHome from "./MechanicHome";
import { Routes, Route, useNavigate } from "react-router-dom";
import FindOrders from "./FindOrders";
import MyOrders from "./MyOrders";

function Mechanic() {
  const navigate = useNavigate();

  return (
    <div>
      <MechanicNav />
      <MechanicHome />
      <Routes>
        <Route path="/mechanic_home/findOrders" element={<FindOrders />} />
        <Route path="/mechanic_home/myorders" element={<MyOrders />} />
      </Routes>
    </div>
  );
}

export default Mechanic;
