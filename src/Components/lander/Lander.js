import React from "react";
import "./Lander.css";
import img1 from "../../Images/img1.png";
import { Link } from "react-router-dom";

const Lander = () => {
  return (
    <div className="Lander">
      <div className="Landercontainer">
        <div className="leftContainer">
          <p className="lock">
            Pass Your <span>GCE</span> by learning <span>anywhere</span> and at{" "}
            <span>Anytime</span>
          </p>
          <p className="desc">
            Atlas is a learning provider based across Cameroon that specialises
            in the accredited and bespoke training courses. we crush the
            barriers to getting your GCE Exam{" "}
          </p>
          <button>
            <Link to="/questionTest">Try Now</Link>
          </button>
        </div>
        <div className="rightContainer">
          <div className="containerR">
            <img src={img1} alt="atlas logo the e-learning platform" />
            <div className="absoluteContainer">
              <div className="content Content1">
                <div className="circle"></div>
                <p>Biggest Online Learning Platform in Cameroon</p>
              </div>
              <div className="content Content2">
                Aims to take Cameroon E-learning to another lever
              </div>
              <div className="content Content3">
                Able to Generate Exam papers
                <div className="paper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lander;
