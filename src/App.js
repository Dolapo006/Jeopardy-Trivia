import "./style.css";
import React, { useEffect, useState } from "react";
import Question from "./components/Question";
import Rules from "./components/Rules";
import LeaderBoard from "./components/LeaderBoard";
import ConfettiGenerator from "confetti-js";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  const [keyedAnswer, setKeyedAnswer] = useState("");
  const [count, setCount] = useState([]);
  const [questions, setQuestions] = useState([{}]);
  const [index, setIndex] = useState(0);
  const [displayQ, setDisplayQ] = useState("");
  const [redir, setRedir] = useState(false);
  const [inc, setInc] = useState(null);
  const url = `https://jservice.io/api/random?count=100`;
  const skip = document.getElementById("skip");
  const go = document.getElementById("go");

  console.log(displayQ);

  //The confetti
  const handleConf = () => {
    const confettiSettings = {
      target: "my-canvas",
      max: "120",
      size: "1",
      animate: "true",
      props: ["square", "triangle", "line"],
      colors: [
        [250, 96, 150],
        [74, 218, 69],
        [96, 173, 250],
        [151, 96, 250],
        [250, 224, 96]
      ],
      clock: "25",
      rotate: true,
      weight: "",
      heigth: "",
      start_from_edge: false,
      respawn: false
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  };

  // The Fetch Hook
  useEffect(() => {
    let unmounted = false;
    fetch(url)
      .then((res) => res.json())
      .then((data) => !unmounted && setQuestions(data))
      .catch(console.error);
    return () => (unmounted = true);
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    setKeyedAnswer(e.target.value);
  };

  
  const redirWin = () => {
    setInterval(() => {
      setRedir(true);
    }, 3000);
  };

  
  const correct = () => {
    setCount((count) => [...count, "dot"]);
    console.log("correct");
    handleConf();
    setKeyedAnswer("");
    count.length > 3
      ? console.log("YOU WON!") || skip.remove() || go.remove() || redirWin()
      : setInc(false) || console.log("10 to win") || handleNext();
  };

  //INcorrect ANswers
  const removeDot = () => {
    setCount((count) => []);
    console.log("incorrect");
    setInc(true);
  };

  //All the questions
  const handleLoad = () => {
    console.log("GO!");
    setDisplayQ(questions[index]);
  };

  
  const handleNext = () => {
    setIndex((index) => (index < 49 ? index + 1 : (index = 0)));
    setDisplayQ(questions[index]);
  };

  return (
    <div className="App">
      <canvas id="my-canvas"></canvas>
      <BrowserRouter>
       
          <Route exact path="/leaderboard">
            <LeaderBoard />
          </Route>
          <Route exact path="/questions">
            <Question
              inc={inc}
              redir={redir}
              handleNext={handleNext}
              keyedAnswer={keyedAnswer}
              handleInput={handleInput}
              correct={correct}
              removeDot={removeDot}
              displayQ={displayQ}
              count={count}
            />
          </Route>
          <Route exact path="/">
            <Rules handleLoad={handleLoad} handleNext={handleNext} />
          </Route>
          
       
      </BrowserRouter>
    </div>
  );
}