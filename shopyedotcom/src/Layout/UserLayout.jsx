import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default UserLayout;
