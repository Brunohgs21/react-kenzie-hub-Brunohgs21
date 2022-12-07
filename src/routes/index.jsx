import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import DashBoard from "./../pages/Dashboard";
import Register from "./../pages/Register";
import { useState } from "react";

const RoutesMain = () => {
  const [loged, setLoged] = useState();

  return (
    <Routes>
      <Route path="/" element={<Login setLoged={setLoged} />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<DashBoard loged={loged} />} />
    </Routes>
  );
};

export default RoutesMain;
