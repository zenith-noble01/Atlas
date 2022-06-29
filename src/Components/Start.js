import React from "react";

const Start = ({ onQuizStart }) => {
  return (
    <div className="start__card">
      <div className="start__card-content">
        <div className="content">
          <h5>
            By Starting this the we're putting you in an examination condition
            by which you can test your knowledge of the subject so far. You can
            only answer questions once and can't go back to the same question.
          </h5>
          <p>Good luck!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
