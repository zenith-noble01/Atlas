import React, { useState } from "react";
import "./Dashboard.scss";
import {
  user,
  DashboardRoundedIcon,
  QuestionAnswerRoundedIcon,
  ClassRoundedIcon,
  RateReviewRoundedIcon,
  DynamicFeedRoundedIcon,
} from "../../Images";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ popup, setPopup }) => {
  // const toastOptions = {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // };

  const [show, setShow] = useState(false);
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [mark, setMark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const questions = {
      topic: topic,
      subject: subject,
      question: question,
      mark: mark,
    };

    console.log(questions);
  };

  return (
    <div className="Sidebar">
      <ul>
        <li>
          <NavLink className="link" to="Dasboard">
            <DashboardRoundedIcon className="icon" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/Dashboard">
            <QuestionAnswerRoundedIcon className="icon" />
            <span>see Questions</span>
          </NavLink>
        </li>
        <ul className={show ? "exam showus" : "exam"}>
          <li onClick={() => setShow(!show)}>
            <ClassRoundedIcon />
            Exam Gen
          </li>
          <ul className="show" onClick={() => setShow(!show)}>
            <li onClick={() => setPopup(!popup)}>
              <RateReviewRoundedIcon />
              <span>Essay</span>
            </li>
            <li>
              <DynamicFeedRoundedIcon />
              <span>MCQs</span>
            </li>
          </ul>
        </ul>
        <li>
          <NavLink className="link" to="Dasboard">
            <i className="fa fa-icon icon"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>
      </ul>

      <div className="ProfileContainer">
        <img src={user} alt="" className="ProfileImg" />
        <span className="ProfileName">Zenith noble</span>
      </div>
      {popup && (
        <div className="popup">
          <button onClick={() => setPopup(!popup)} className="closePopup">
            +
          </button>
          <form className="popup-content" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter subject...."
              onChange={(e) => setSubject(e.target.value)}
              required
              min="5"
            />
            <input
              type="text"
              placeholder="Enter topic"
              onChange={(e) => setTopic(e.target.value)}
              required
              min="5"
            />
            <textarea
              placeholder="Enter Questions...."
              onChange={(e) => setQuestion(e.target.value)}
              required
              min="5"
            ></textarea>
            <input
              type="text"
              placeholder="Enter Mark...."
              onChange={(e) => setMark(e.target.value)}
              required
              min="5"
            />
            <button className="publish" type="submit">
              Publish
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
