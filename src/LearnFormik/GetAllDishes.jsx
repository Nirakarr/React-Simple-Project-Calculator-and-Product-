import React from "react";
import { getDishes } from "../localstorage";

const GetAllDishes = () => {
  let getAllDishes = getDishes() || [];

  console.log(getAllDishes);
  return (
    <div>
      {getAllDishes.map((dish, i) => {
        return (
          <div style={{ border: "solid red 3px", margin: "10px 0px" }}>
            <img src={dish.ingredientsImage} alt="dishes"></img>
            <p>name: {dish.name}</p>
            <p>stepsToCook:{dish.stepsToCook}</p>
            <p>ingredients: {dish.ingredients}</p>
            <p></p>
          </div>
        );
      })}
    </div>
  );
};

export default GetAllDishes;
