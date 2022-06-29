import React, { useState, useEffect } from "react";
import "./TakeQuestionTest.scss";

import { Question, End, Start, Modal } from "../../Components";
import quizData from "../../data/june2020.json";
import { CancelTwoTone } from "../../Images";
import { subject, examYears } from "../../data/dummy";

let interval;

const App = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  const [click, setClick] = useState(false);
  const [instruction, setInstruction] = useState(true);
  const [id, setId] = useState("");
  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const handleClick = (any) => {
    if (any === "coming soon") {
      setClick(false);
    } else {
      setClick(true);
    }
  };

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleCancel = () => {
    setShowModal(false);
    setClick(false);
    setInstruction(true);
    setAnswers([]);
    setActiveQuestion(0);
    setStep(1);
    setTime(0);
  };

  const handleId = (e) => {
    setId(e);
    setInstruction(false);
  };

  return (
    <div className="app__takequestions">
      <div className="question__container">
        {subject.map((subject) => (
          <div
            className={
              subject.try === "coming soon" ? "subject disabled" : "subject"
            }
            aria-disabled={subject.try === "coming soon"}
            onClick={() => handleClick(subject.try)}
            key={subject.title}
          >
            <h1>{subject.title}</h1>
            <button
              className={subject.try === "coming soon" ? "btn disabled" : "btn"}
              disabled={subject.try === "coming soon"}
            >
              {subject.try}
            </button>
          </div>
        ))}
      </div>
      {click && (
        <div className="QuestionContainer">
          <div className="question__content">
            {instruction ? (
              <div className="year__selection">
                <p>Please Select Year to Answer</p>
                <div className="years">
                  {examYears.map((y) => (
                    <div
                      className="year"
                      key={y.id}
                      onClick={() => handleId(y.id)}
                    >
                      {y.year}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="quesiton__wrapp">
                {step === 1 && <Start onQuizStart={quizStartHandler} />}
                {step === 2 && (
                  <Question
                    data={quizData.questions[activeQuestion]}
                    onAnswerUpdate={setAnswers}
                    numberOfQuestions={quizData.questions.length}
                    activeQuestion={activeQuestion}
                    onSetActiveQuestion={setActiveQuestion}
                    onSetStep={setStep}
                  />
                )}
                {step === 3 && (
                  <End
                    results={answers}
                    data={quizData.questions}
                    onReset={resetClickHandler}
                    onAnswersCheck={() => setShowModal(true)}
                    time={time}
                  />
                )}
                {showModal && (
                  <Modal
                    onClose={() => setShowModal(false)}
                    results={answers}
                    data={quizData.questions}
                  />
                )}
              </div>
            )}
          </div>
          <CancelTwoTone onClick={handleCancel} />
        </div>
      )}
    </div>
  );
};

export default App;
