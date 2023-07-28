import React from "react";
import "./practise2.css";
import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Practise1 = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    getQuizData();
  }, []);

  const getQuizData = () => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple"
      )
      .then(function (response) {
        const data = response.data["results"].map((item) => {
          let answers = item.incorrect_answers;
          answers.push(item.correct_answer);
          item.answers = answers;
          return item;
        });
        setQuizData(data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // The response parameter in finally will be undefined.
        console.log("Quiz data fetch completed.");
      });
  };

  return (
    <div className="quizContainer">
      <div style={{ background: "#2e3244" }}>1</div>
      <div className="two">
        <h1 className="quizHeader">Welcome to Quiz</h1>
        <div className="quizContainers">
          {quizData.map((item) => (
            <div key={item.question} className="quesTitle">
              {item.question}
            </div>
          ))}
          <div className="answerContainer">
            {quizData.map((item) =>
              item.answers.map((ans, index) => (
                <Button key={index} variant="contained">
                  <span>{index + 1}</span>
                  {ans}
                </Button>
              ))
            )}
          </div>
          <div className="nxtbtn">
            <Button variant="contained">SUBMIT</Button>
            <Button variant="contained">NEXT</Button>
          </div>
        </div>
      </div>
      <div style={{ background: "#2e3244" }}></div>
    </div>
  );
};

export default Practise1;
