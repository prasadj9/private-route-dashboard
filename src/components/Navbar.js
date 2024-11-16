import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };
  return (
    <nav>
      <ul>
        <li>
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="nav-link" to="/">
            Sign In
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
          <Button variant="contained" color="error" onClick={handleLogOut}>
            Logout
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
