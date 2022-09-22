import React, { useState, useEffect } from "react";
import { logo, girl } from "../../Images";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { registerStudent, reset } from "../../redux/reducers/authSlice";
import { Spinner } from "../../Components";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const { username, email, password, confirmPass } = formData;

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { message, student, isLoading, isSuccess, isError } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      toast.error("password do not match");
    } else {
      const studentData = {
        username,
        email,
        password,
      };

      dispatch(registerStudent(studentData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess && student) {
      window.location.reload();
      navigate("/assessment");
    }

    dispatch(reset());
  }, [isError, isSuccess, message, student, navigate, dispatch]);

  console.log(isError);

  useEffect(() => {
    //getStudent localStorage
    const student = localStorage.getItem("student");
    if (student) {
      navigate("/assessment");
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

          <form onSubmit={handleSubmit}>
            <div className="input__container me">
              <input
                type="text"
                placeholder="Username"
                value={username}
                name="username"
                onChange={handleOnChange}
              />
            </div>
            <div className="input__container">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleOnChange}
              />
            </div>
            <div className="input__container">
              <input
                type="password"
                value={password}
                placeholder="Password"
                name="password"
                onChange={handleOnChange}
              />
            </div>
            <div className="input__container">
              <input
                type="password"
                name="confirmPass"
                value={confirmPass}
                placeholder="Confirm password"
                onChange={handleOnChange}
              />
            </div>
            <div className="check__container">
              <div className="checkbox">
                <input type="checkbox" />
                <span>Remember Me</span>
              </div>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
            <button type="submit">Register</button>
          </form>
          <p className="new">
            Already on this Platform? <Link to="/login">Sign In</Link>
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
