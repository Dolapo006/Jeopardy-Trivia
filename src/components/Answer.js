import React from "react";
import { Routes } from "react-router-dom";
import Counter from "./Counter";

function Answer({
  inc,
  redir,
  count,
  displayQ,
  keyedAnswer,
  handleInput,
  correct,
  removeDot
}) {
  
  if (redir === true) {
    return <Routes to="/leaderboard" />;
  }

  
  const colorR = () => {
    return <div id="incorrect">INCORRECT!</div>;
  };

  return (
    <div>
      <p>
        <input
          autoComplete="off"
          type="text"
          value={keyedAnswer}
          name="answer"
          onChange={handleInput}
        />
      </p>

      <button
        className="pure-button"
        id="go"
        type="button"
        onClick={() => {
          displayQ.answer
            .toLowerCase()
            .replace(/[^A-Za-z0-9]/g, "")
            .replace(/a/gi, "")
            .replace(/an/gi, "")
            .replace(/and/gi, "")
            .replace(/the/gi, "")
            .replace(/i/gi, "")
            .replace(/s/gi, "")
            .replace(/ /gi, "") ===
          keyedAnswer
            .toLowerCase()
            .replace(/[^A-Za-z0-9]/g, "")
            .replace(/the/gi, "")
            .replace(/a/gi, "")
            .replace(/an/gi, "")
            .replace(/and/gi, "")
            .replace(/i/gi, "")
            .replace(/s/gi, "")
            .replace(/ /gi, "")
            ? correct()
            : removeDot();
        }}
      >
        Submit
      </button>
      <Counter count={count} />
      <div id="correct">{count.length > 4 ? "YOU WON!" : null}</div>
      <div>{inc === true ? colorR() : null} </div>
    </div>
  );
}

export default Answer;