import React, { useState } from "react";
import { Link } from "react-router-dom";

function Rules({ handleLoad, handleNext }) {
  const [show, setShow] = useState(false);

  
  const handleShowRules = () => {
    setShow((show) => !show);
  };

  return (
    <div>
      <div className="pure-g">
        <div className="pure-u-1-1">
          <h1>
            <div className="title" id="t">
              T
            </div>
            <div className="title" id="r">
              R
            </div>
            <div className="title" id="i">
              I
            </div>
            <div className="title" id="v">
              V
            </div>
            <div className="title" id="y">
              Y
            </div>
            <div className="title" id="a">
              A
            </div>
          </h1>
        </div>
        <div className="pure-u-1-1">
          <h3 onClick={handleShowRules}>→ Rules ←</h3>
        </div>
      </div>
      {show === true ? (
        <div className="pure-g">
          <div className="pure-u-1">
            <p>A total of 50 individual questions will load.</p>
          </div>
          <div className="pure-u-1">
            <p>Win by answering 5 questions in a row.</p>
          </div>
          <div className="pure-u-1">
            <p>
              If the answer is incorrect the game will restart
            </p>
          </div>
        </div>
      ) : null}
      <div className="pure-g">
        <div className="pure-u-1-1">
          <Link to="/questions">
            <button
              id="start"
              className="pure-button"
              onClick={() => {
                handleLoad();
                handleNext();
              }}
            >
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rules;