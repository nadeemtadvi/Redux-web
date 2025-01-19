import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import UserLayout from "./Layout/UserLayout";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Homepage />} />
        <Route path="cart" element={<Cartpage />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
