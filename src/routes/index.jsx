import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import DashBoard from "./../pages/Dashboard";
import Register from "./../pages/Register";
import { useState } from "react";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default RoutesMain;
