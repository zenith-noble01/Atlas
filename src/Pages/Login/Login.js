import React, { useState } from "react";
import { logo, girl } from "../../Images";
import "./Login.scss";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="app__login">
      <div className="login__container">
        <div className="left__login-container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <img src={girl} alt="" className="loginUserImg" />
          <div className="card one">
            <div className="icon"></div>
            <div className="description"></div>
          </div>
          <div className="card two">
            <div className="icon"></div>
            <div className="description"></div>
          </div>
          <div className="card three">
            <div className="icon"></div> <div className="description"></div>
          </div>
        </div>
        <div className="right__login-container">
          <div className="right__header">
            <p className="welcome">Welcome to Atlas</p>
            <p className="please">
              Please sign-in to your account to start the adventure
            </p>
          </div>
          <div className="quote">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              sed ducimus expedita."
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input__container">
              <input
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                onChange={handleOnChange}
              />
            </div>
            <div className="input__container">
              <input
                type="password"
                placeholder="Password"
                onChange={handleOnChange}
                value={password}
                name="password"
              />
            </div>
            <div className="check__container">
              <div className="checkbox">
                <input type="checkbox" />
                <span>Remember Me</span>
              </div>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
            <button type="submit">Login</button>
          </form>
          <p className="new">
            New on this platform? <Link to="/register">Create an account</Link>
          </p>

          <div className="or__container">
            <hr />
            <p>or</p>
          </div>
          <div className="or__options">
            <div className="ors google">
              <FaGoogle />
            </div>
            <div className="ors facebook">
              <FaFacebook />
            </div>
            <div className="ors twitter">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
