import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./practise2.css";
import axios from "axios";
const Practice1 = () => {
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState(new Map());
  const [result, setResult] = useState(0);
  const [isfinishQuiz, setisFinishQuiz] = useState(false);
  useEffect(() => {
    getQuizData();
  }, [true]);

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  const getQuizData = () => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=20&category=21&difficulty=easy&type=multiple"
      )
      .then(function (response) {
        const data = [];
        response.data["results"].forEach((e, index) => {
          let answers = e.incorrect_answers;
          answers.push(e.correct_answer);
          e.answers = shuffle(answers);
          e.id = `que_${index}`;
          data.push(e);
        });
        console.log(response);
        // setQuizData(response.data['results'])
        setQuizData(data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function (error) {});
  };
  const onCalculateResult = () => {
    let result = 0;
    quizData.forEach((que) => {
      if (userAnswers.get(que.id) === que.correct_answer) {
        result = result + 1;
      }
      setResult(result);
      setisFinishQuiz(true);
    });
  };
  return (
    <div className="container">
      <div style={{ background: "#2e3244" }}></div>
      {isfinishQuiz ? (
        <div>{result}</div>
      ) : (
        <div className="middle">
          {quizData.map((e) => (
            <div className="quizTitle">
              <div>{e.question}</div>
              <div className="answerContainer">
                {e.answers.map((ans) => (
                  <Button
                    variant="contained"
                    onClick={() => {
                      userAnswers.set(e.id, ans);
                      setUserAnswers(new Map(userAnswers));
                    }}
                    style={{
                      background:
                        userAnswers.get(e.id) === ans ? "green" : "blue",
                    }}
                  >
                    {/* <span>A </span> */}
                    <div>{ans}</div>
                  </Button>
                ))}
              </div>
            </div>
          ))}

          <div>
            <Button
              variant="contained"
              className="nxtbtn"
              onClick={onCalculateResult}
            >
              Next
            </Button>
          </div>
        </div>
      )}

      <div style={{ background: "#2e3244" }}></div>
    </div>
  );
};
export default Practice1;
