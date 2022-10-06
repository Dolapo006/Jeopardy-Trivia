import React from "react";
import { Redirect } from "react-router-dom";
import Answer from "../components/Answer";

function Question({
  inc,
  redir,
  count,
  handleNext,
  keyedAnswer,
  handleInput,
  correct,
  removeDot,
  displayQ
}) {
  // Title case function
  const titleCase = (s) => {
    if (typeof s !== "undefined") {
      return s
        .toLowerCase()
        .split(" ")
        .map(function (word) {
          return word.replace(word[0], word[0].toUpperCase());
        })
        .join(" ");
    } else {
      return <Redirect to="#" />;
    }
  };

  return (
    <div>
      <div key={displayQ.id}>
        <button
          className="pure-button"
          id="skip"
          onClick={() => {
            handleNext();
            removeDot();
          }}
        >
          Skip
        </button>
        <div id="cat">Category: </div>
        <h3>{titleCase(displayQ.category?.title)}</h3>
        <p>{displayQ.question}</p>
        <Answer
          inc={inc}
          redir={redir}
          count={count}
          displayQ={displayQ}
          handleNext={handleNext}
          keyedAnswer={keyedAnswer}
          handleInput={handleInput}
          correct={correct}
          removeDot={removeDot}
        />
      </div>
    </div>
  );
}

export default Question;