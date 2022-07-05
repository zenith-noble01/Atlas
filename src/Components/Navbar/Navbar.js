import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logo } from "../../Images";
import "./Navbar.css";

const Navbar = ({ popup }) => {
  const [changeColor, setChangeColor] = useState(false);
  const [show, setShow] = useState(false);

  function changeNavBgColor() {
    if (window.scrollY >= 70) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }
  window.addEventListener("scroll", changeNavBgColor);

  const student = useSelector((state) => state.auth?.student);
  console.log(student);

  return (
    <div
      className={changeColor ? "Navbar change" : "Navbar"}
      style={{ zIndex: popup ? "0" : "999" }}
    >
      <img src={logo} alt="" />
      <div className="nav__items">
        <ul className="ulList">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>Category</li>
          <li>Courses</li>
          <li>Blog</li>
          <li>
            <Link className="link" to="/Dashboard">
              Dashbord
            </Link>
          </li>
          <li>
            <Link className="link" to="/questionTest">
              Take Question Test
            </Link>
          </li>
        </ul>
        {student ? (
          <p>{student.username}</p>
        ) : (
          <ul className="ctaLayer">
            <li className="btnLogin">
              <Link to="/login">Sign In</Link>
            </li>
            <li className="btnSign">
              <Link className="link" to="/register">
                sign Up
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className="mobileNav" onClick={() => setShow(!show)}>
        <div className="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="mobileList" style={{ right: show ? "0" : "-70vw" }}>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>Category</li>
          <li>Courses</li>
          <li>Blog</li>
          <li>
            <Link className="link" to="/Dashboard">
              Dashbord
            </Link>
          </li>
          <li>
            <Link className="link" to="/questionTest">
              Take Question Test
            </Link>
          </li>
          {student ? (
            <p>{student.username}</p>
          ) : (
            <ul className="ctaLayer">
              <li className="btnLogin">
                <Link to="/login">Sign In</Link>
              </li>
              <li className="btnSign">
                <Link className="link" to="/register">
                  sign Up
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
