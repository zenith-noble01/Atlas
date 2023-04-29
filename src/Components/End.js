import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { FormatTime } from "./";

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  

  useEffect(() => {
    let correct = 0;
    results?.map((result, index) => {
      if (result.a === data[index].correct) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, [results, data]);

  let answerPercentage = Math.floor((correctAnswers / data.length) * 100);
  return (
    <div className="end__container">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3>
          <p className="correct__length">
            {correctAnswers} of {data?.length}
          </p>
          <div className="circular__progress">
            <CircularProgressbar
              value={answerPercentage}
              text={`${answerPercentage}%`}
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: `rgba(62, 152, 199, ${answerPercentage / 100})`,
              })}
              strokeWidth={5}
            />
          </div>
          <p className="timeTaken">
            <strong>Your time:</strong> {FormatTime(time)}
          </p>
          <div className="btn__container">
            <button className="button check" onClick={onAnswersCheck}>
              Check your answers
            </button>
            <button className="button reset" onClick={onReset}>
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
