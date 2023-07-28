import { Button } from "@mui/material";
import React from "react";
import "./QuizApp.css";
const QuizApp = () => {
  return (
    <div className="quizContainer">
      <div className="quesTitle">This is Question</div>
      <div className="answerContainer">
        <Button variant="contained">Answer 1</Button>
        <Button variant="contained">Answer 2</Button>
        <Button variant="contained">Answer 3</Button>
        <Button variant="contained">Answer 4</Button>
      </div>
      <div>
        <Button variant="contained" className="nxtbtn">
          NEXT
        </Button>
      </div>
    </div>
  );
};

export default QuizApp;
