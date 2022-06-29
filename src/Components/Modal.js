import React from "react";

const Modal = ({ onClose, results, data }) => {
  console.log(results);
  return (
    <div className="modal">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Your answers</p>
          <button className="delete" onClick={onClose}>
            Done
          </button>
        </header>
        <section className="content">
          <ul>
            {results.map((result, i) => (
              <li key={i} className="questionNumber">
                <p className="questionTitle">
                  <strong>{result.q}</strong>
                </p>
                <p
                  className={
                    result.a === data[i].correct
                      ? "success questionName"
                      : "questionName wrong"
                  }
                >
                  Your answer: {result.a}
                </p>
                {result.a !== data[i].correct && (
                  <p className="successQuestion">
                    Correct answer: {data[i].correct}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Modal;
