// Home.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import WhyUs from "./WhyUs";
import Login from "./Login";
import Register from "./Register";
import Member_Login from "../Member/Member_Login";
import Contact from "./Contact";
import Working from "./Working";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/working" element={<Working />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/member_login" element={<Member_Login />} />
        {/* The default route should be at the end */}
        <Route path="/" element={<WhyUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Home;
