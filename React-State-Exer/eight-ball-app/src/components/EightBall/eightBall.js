import React, { useState } from "react";
import { getRandomAnswer } from "./logic";

function EightBall({ answers: answerOptions }) {
  const [answer, setAnswer] = useState({
    msg: "Think of a question",
    color: "black",
  });

  function handleClick(evt) {
    setAnswer(getRandomAnswer(answerOptions));
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{ backgroundColor: answer.color }}
    >
      <b>{answer.msg}</b>
    </div>
  );
}

export default EightBall;
