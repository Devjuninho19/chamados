import React from "react";
import { Route, Routes } from "react-router-dom";

import Signin from "../Pages/Signin";
import SignUp from "../Pages/SiginUp";
const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin/>} />

      <Route path="/SiginUp" element={<SignUp/>} />
    </Routes>
  );
};

export default RoutesApp;
