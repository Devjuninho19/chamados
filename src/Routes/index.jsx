import React from "react";
import { Route, Routes } from "react-router-dom";

import Signin from "../Pages/Signin";
import SignUp from "../Pages/SiginUp";
import Dashboard from "../Pages/Dashboard"
const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin/>} />

      <Route path="/SiginUp" element={<SignUp/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
};

export default RoutesApp;
