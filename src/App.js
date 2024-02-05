// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Customer from "./components/Customer/Customer";
import Admin from "./components/Member/Admin/Admin";
import Mechanic from "./components/Member/Mechanic/Mechanic";
import Login from "./components/Home/Login";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/cust_home" element={<Customer />} />
      <Route path="/admin_home" element={<Admin />} />
      <Route path="/mechanic_home" element={<Mechanic />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
