import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link> 
      <Link to="/test">test</Link>
    </>
  );
}

export default Navbar;

