import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";
import AdminHome from "./AdminHome";
import Bikes from "./Bikes";
import Services from "./Services";
import Mechanic from "./Mechanic";
import Orders from "./Order";
import { authService } from "../../../services/member/auth_service";

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const admin = authService.getAdmin();
    if (admin === null) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <AdminNav />
      <AdminHome />
      <Routes>
        {/* <Route path="/admin_home" element={<AdminHome />} /> */}
        <Route path="/admin_home/bikes" element={<Bikes />} />
        <Route path="/admin_home/packages" element={<Services />} />
        <Route path="/admin_home/mechanics" element={<Mechanic />} />
        <Route path="/admin_home/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default Admin;
