import React from "react";
import "./ProfileInsight.scss";
import { FcElectricity } from "react-icons/fc";

const ProfileInsight = () => {
  return (
    <div className="student__insights">
      <div className="insight__header">
        <p>Insights</p>
      </div>
      <div className="insight__container">
        <div className="insight__content">
          <div className="insight__content__icon">
            <FcElectricity />
          </div>
          <div className="insight__content__text">
            <p>
              0<span>Courses</span>
            </p>
          </div>
        </div>
        <div className="insight__content">
          <div className="insight__content__icon">
            <FcElectricity />
          </div>
          <div className="insight__content__text">
            <p>
              0<span>Certificates</span>
            </p>
          </div>
        </div>
        <div className="insight__content">
          <div className="insight__content__icon">
            <FcElectricity />
          </div>
          <div className="insight__content__text">
            <p>
              0<span>Hours Spent</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInsight;
