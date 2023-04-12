import React, { useRef } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const navRef = useRef();
  
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src="Images\LOGO_final-1.png" alt="" />
          </Link>
        </div>
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/">About</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="nav-button">
          <Link to="/login">
            <button className="btn-button login">Login</button>
          </Link>
          <Link to="/signUp">
          <button className="btn-button signup">Sign Up</button>
          </Link>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
