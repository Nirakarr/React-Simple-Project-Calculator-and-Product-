import { useState } from "react";
import "./days.css";
export default function Days({ day, setDay }) {
  const [color, setColor] = useState();
  return (
    <div>
      <span style={{ backgroundColor: color }}>{day}</span>
      <br />
      <button
        onClick={() => {
          setDay("Sunday");
          setColor("green");
        }}
      >
        Day1
      </button>
      <button
        onClick={() => {
          setDay("Monday");
          setColor("green");
        }}
      >
        Day2
      </button>
      <button
        onClick={() => {
          setDay("Tuesday");
          setColor("green");
        }}
      >
        Day3
      </button>
      <button
        onClick={() => {
          setDay("Wednesday");
          setColor("green");
        }}
      >
        Day4
      </button>
      <button
        onClick={() => {
          setDay("Thursday");
          setColor("green");
        }}
      >
        Day5
      </button>
      <button
        onClick={() => {
          setDay("Friday");
          setColor("green");
        }}
      >
        Day6
      </button>
      <button
        onClick={() => {
          setDay("Saturday");
          setColor("green");
        }}
      >
        Day7
      </button>
    </div>
  );
}
