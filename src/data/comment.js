{
  /* {questions.questions?.map((question) => (
                  <div className="questionData" key={question._id}>
                    <p>{question.qustionTitle}</p>
                    <ul>
                      {question?.suggestions.map((suggestion) => (
                        <ul className="suggestion" key={question._id}>
                          <li>
                            <input
                              type="checkbox"
                              name=""
                              id="a"
                              class="answerElem"
                            />
                            <label id="a_text">{suggestion.a}</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name=""
                              id="a"
                              class="answerElem"
                            />
                            <label id="a_text">{suggestion.b}</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name=""
                              id="a"
                              class="answerElem"
                            />
                            <label id="a_text">{suggestion.c}</label>
                          </li>
                          <li>
                            <input
                              type="checkbox"
                              name=""
                              id="a"
                              class="answerElem"
                            />
                            <label id="a_text">{suggestion.d}</label>
                          </li>
                        </ul>
                      ))}
                    </ul>
                  </div>
                ))} */
}

{
  /*   <h2>{question?.qustionTitle}</h2>
                 {question?.suggestions.map((s) => (
                    <ul key={s._id}>
                      <li ref={radiosWrapper}>
                        <input
                          type="checkbox"
                          name="option"
                          id="a"
                          value={s.a}
                          className="answerElem"
                        />
                        <label id="a_text">{s.a}</label>
                      </li>
                      <li ref={radiosWrapper}>
                        <input
                          type="checkbox"
                          name="option"
                          onChange={changeHandler}
                          value={s.b}
                        />
                        <label id="a_text">{s.b}</label>
                      </li>
                      <li ref={radiosWrapper}>
                        <input
                          type="checkbox"
                          name="option"
                          value={s.c}
                          onChange={changeHandler}
                        />
                        <label id="a_text">{s.c}</label>
                      </li>
                      <li ref={radiosWrapper}>
                        <input
                          type="checkbox"
                          name="option"
                          onChange={changeHandler}
                          value={s.d}
                        />
                        <label id="a_text">{s.d}</label>
                      </li>
                    </ul>
                  ))} 
                  <button onClick={handleNextQuestion}>Next</button> */
}

// import React, { useState, useEffect } from "react";
// import { examYears, subject } from "../../data/dummy";
// import "./TakeQuestionTest.scss";
// import { CancelTwoTone } from "../../Images";
// import axios from "axios";
// import { questionRoute } from "../../api/endpoints";
// import { Timer, Question } from "../../Components";
// import questionData from "../../data/june2020.json";

// const TakeQuestionTest = () => {
//   const [click, setClick] = useState(false);
//   const [instruction, setInstruction] = useState(true);
//   const [questions, setQuestions] = useState({});
//   const [error, setError] = useState(false);
//   const [id, setId] = useState(null);
//   const [question, setQuestion] = useState(null);
//   const [questionNumber, setQuestionNumber] = useState(0);
//   const [timeOut, setTimeOut] = useState(false);
//   const [activeQuestion, setActiveQuestion] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [nextStep, setNextStep] = useState(false);
//   const [time, setTime] = useState(0);

//   // const
//   let interval;

//   useEffect(() => {
//     if (nextStep) {
//       clearInterval(interval);
//     }
//   }, [nextStep]);

//   const handleClick = (any) => {
//     if (any === "coming soon") {
//       setClick(false);
//     } else {
//       setClick(true);
//     }
//   };

//   const quizStartHandler = () => {
//     interval = setInterval(() => {
//       setTime((prevTime) => prevTime + 1);
//     }, 1000);
//   };

//   useEffect(() => {
//     const getQuestion = async () => {
//       await axios
//         .get(questionRoute + id)
//         .then((res) => setQuestions(res.data.questions))
//         .catch((error) => setError(error.message));
//     };
//     console.log(error);

//     getQuestion();
//   }, [id, error]);

//   const handleId = (e) => {
//     setId(e);
//     setInstruction(false);
//     quizStartHandler();
//   };

//   useEffect(() => {
//     setQuestion(questions[questionNumber - 1]);
//   }, [questionNumber, questions]);

//   // const handleNextQuestion = () => {
//   //   setQuestionNumber((prev) => prev + 1);
//   // };

//   return (
//     <div className="app__takequestions">
//       <div className="question__container">
//         {subject.map((subject) => (
//           <div
//             className={
//               subject.try === "coming soon" ? "subject disabled" : "subject"
//             }
//             aria-disabled={subject.try === "coming soon"}
//             onClick={() => handleClick(subject.try)}
//             key={subject.title}
//           >
//             <h1>{subject.title}</h1>
//             <button
//               className={subject.try === "coming soon" ? "btn disabled" : "btn"}
//               disabled={subject.try === "coming soon"}
//             >
//               {subject.try}
//             </button>
//           </div>
//         ))}
//       </div>
//       {click && (
//         <div className="QuestionContainer">
//           <div className="question__content">
//             {instruction ? (
//               <div className="year__selection">
//                 <p>Please Select Year to Answer</p>
//                 <div className="years">
//                   {examYears.map((y) => (
//                     <div
//                       className="year"
//                       key={y.id}
//                       onClick={() => handleId(y.id)}
//                     >
//                       {y.year}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <div className="quesiton__wrapp">
//                 <div className="question">
//                   <div className="timmer_wa">
//                     <div className="timer">
//                       <Timer
//                         setTimeOut={setTimeOut}
//                         questionNumber={questionNumber}
//                         setActiveQuestion={setActiveQuestion}
//                         activeQuestion={activeQuestion}
//                         onAnswerUpdate={setAnswers}
//                         numberOfQuestions={questionData.questions.length}
//                       />
//                     </div>
//                   </div>
//                   <Question
//                     data={questionData.questions[activeQuestion]}
//                     onAnswerUpdate={setAnswers}
//                     numberOfQuestions={questionData.questions.length}
//                     result={answers}
//                     activeQuestion={activeQuestion}
//                     question={questionData.questions}
//                     onSetActiveQuestion={setActiveQuestion}
//                     time={time}
//                     nextStep={nextStep}
//                     setNextStep={setNextStep}
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//           <CancelTwoTone onClick={() => setClick(false)} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default TakeQuestionTest;
