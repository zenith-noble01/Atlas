import { useEffect, useState } from "react";

export default function Timer({
  setTimeOut,
  // questionNumber,
  numberOfQuestions,
  setActiveQuestion,
  activeQuestion,
}) {
  const [timer, setTimer] = useState(540);
  if (timer === 0) {
    setActiveQuestion(activeQuestion + 1);
    setTimeOut(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);
  return timer;
}
