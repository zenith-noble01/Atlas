import React from "react";
import "./Charts.scss";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { progressData } from "../../data/dummy";
import "react-circular-progressbar/dist/styles.css";

const Charts = () => {
  return (
    <div className="charts__container">
      <div className="chart__header">
        <p>Progress for Offering subjects</p>
        <p>Representation</p>
      </div>
      <div className="chart__content">
        <div className="chart__one">
          {progressData.map((p, index) => (
            <div className="one" key={index}>
              <CircularProgressbar
                value={p.value}
                text={`${p.value}%`}
                styles={buildStyles({
                  pathTransitionDuration: 0.5,
                  pathColor:
                    p.value < 50
                      ? " red"
                      : `rgba(62, 152, 199, ${p.value / 100})`,
                  trailColor: "transparent",
                  strokeLinecap: "round",
                  textColor:
                    p.value < 50
                      ? " red"
                      : `rgba(62, 152, 199, ${p.value / 100})`,
                  textSize: "20px",
                })}
                strokeWidth={5}
              />
              {p.subject}
            </div>
          ))}
        </div>
        <div className="chart__two">chart2</div>
      </div>
    </div>
  );
};

export default Charts;
