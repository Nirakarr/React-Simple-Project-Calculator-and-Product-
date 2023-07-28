import { useState } from "react";
import "./days.css";

export default function Day({ day, setDay }) {
  const [color, setColor] = useState();
  const [buttonColor, setButtonColor] = useState();

  const handleButtonClick = (clickedDay) => {
    setDay(clickedDay);
    setColor("green");
    setButtonColor("green");
  };

  const isButtonActive = (clickedDay) => {
    return day === clickedDay ? buttonColor : "";
  };

  return (
    <div>
      <span style={{ backgroundColor: color }}>{day}</span>
      <br />
      <button
        onClick={() => handleButtonClick("Sunday")}
        style={{ backgroundColor: isButtonActive("Sunday") }}
      >
        Day1
      </button>
      <button
        onClick={() => handleButtonClick("Monday")}
        style={{ backgroundColor: isButtonActive("Monday") }}
      >
        Day2
      </button>
      <button
        onClick={() => handleButtonClick("Tuesday")}
        style={{ backgroundColor: isButtonActive("Tuesday") }}
      >
        Day3
      </button>
      <button
        onClick={() => handleButtonClick("Wednesday")}
        style={{ backgroundColor: isButtonActive("Wednesday") }}
      >
        Day4
      </button>
      <button
        onClick={() => handleButtonClick("Thursday")}
        style={{ backgroundColor: isButtonActive("Thursday") }}
      >
        Day5
      </button>
      <button
        onClick={() => handleButtonClick("Friday")}
        style={{ backgroundColor: isButtonActive("Friday") }}
      >
        Day6
      </button>
      <button
        onClick={() => handleButtonClick("Saturday")}
        style={{ backgroundColor: isButtonActive("Saturday") }}
      >
        Day7
      </button>
    </div>
  );
}
