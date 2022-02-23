import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard.js";
import SingleList from "./SingleList.js";
import Navbar from "./Navbar";
// import Navbar from "./Navbar";

const Navigations = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<LayoutsWithNavbar />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list/:id" element={<SingleList />} />
      </Route>
    </Routes>
  );
};

export default Navigations;

function LayoutsWithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
const Home = () => {
  return (
    <>
      <h2>Homepage!</h2>
      <Link to="/login">Goto Login</Link>
    </>
  );
};
