import React, { useState, useEffect } from "react";
import { logo, girl } from "../../Images";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginStudent, reset } from "../../redux/reducers/authSlice";
import { Spinner } from "../../Components";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      window.location.reload();
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginStudent(userData));
  };

  useEffect(() => {
    //getStudent localStorage
    const student = localStorage.getItem("student");
    if (student) {
      navigate("/questionTest");
    }
  }, [navigate]);

  if (isLoading) {
    return <Spinner />;
  }

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
          <form onSubmit={onSubmit}>
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
