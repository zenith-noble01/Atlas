import { useEffect, useState } from "react";

export default function Timer({
  setTimeOut,
  // questionNumber,
  numberOfQuestions,
  setActiveQuestion,
  activeQuestion,
}) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0 && activeQuestion < numberOfQuestions - 1) {
      setTimeOut(true);
      if (activeQuestion < numberOfQuestions - 1) {
        setActiveQuestion(activeQuestion + 1);
      }
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut, activeQuestion, setActiveQuestion, numberOfQuestions]);

  useEffect(() => {
    setTimer(30);
  }, [activeQuestion]);
  return timer;
}
