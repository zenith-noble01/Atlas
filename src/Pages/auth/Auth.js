import React, { useState, useEffect } from "react";
import "./Auth.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authLogin, authRegister } from "../../api/endpoints";

const Auth = () => {
  const [active, setActive] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("student")) {
      navigate("/");
    }
  });
  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  // const username = useRef();
  // const email = useRef();
  // const password = useRef();
  // const passwordAgain = useRef();

  const handleRegister = async (e) => {
    e.preventDefault();

    console.log(username);
    if (passwordAgain !== password) {
      return toast.error("Passwords don't match", toastOptions);
    } else {
      const parent = {
        username,
        email,
        password,
      };
      console.log(parent);
      try {
        const { data } = await axios.post(authRegister, parent);
        if (data.status === false) {
          toast.error(data.msg, toastOptions);
        }
        if (data.status === true) {
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/");
        }
      } catch (err) {
        toast.error(err, toastOptions);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const parent = {
        email,
        password,
      };
      const { data } = await axios.post(authLogin, parent);
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.reload();
        navigate("/");
      }
    } catch (err) {
      toast.error(err, toastOptions);
    }
  };

  return (
    <div className="auth">
      <div className="authContainer">
        <div className="bg">
          <div className="box signIn">
            <h2>Already Have an Account ?</h2>
            <button className="signInBtn" onClick={() => setActive(!active)}>
              Sign In
            </button>
          </div>
          <div className="box signUp">
            <h2>Don't Have an Account ?</h2>
            <button className="signUpBtn" onClick={() => setActive(!active)}>
              Sign Up
            </button>
          </div>
        </div>
        <div className={active ? "forms activeSide" : "forms"}>
          <div className="form signInForm">
            <form onSubmit={handleLogin}>
              <h3>Sign Up</h3>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                require
              />
              <input
                type="password"
                placeholder="Password"
                require
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="submit" value="Log In" />
              <Link to="/forgotpassword" className="link">
                Forgot Password
              </Link>
            </form>
          </div>
          <div className="form signUpForm">
            <form onSubmit={handleRegister}>
              <h3>Sign In</h3>
              <input
                type="text"
                placeholder="Username"
                require
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                require
              />
              <input
                type="password"
                placeholder="Password"
                require
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                require
                onChange={(e) => setPasswordAgain(e.target.value)}
              />
              <input type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Auth;
