import React from "react";
// import Days from "./Days";
import { useState } from "react";
import Day from "./Day";
// import Day from "./Day";

// const [color, setColor] = useState();
// const handleSubmit = () => {
//   setColor("green");
// };

const Compopasser = () => {
  const [day, setDay] = useState("Day");
  return (
    <div>
      {/* <NavBar></NavBar>
      <FormikForm></FormikForm>
      <GetAllDishes></GetAllDishes> */}
      {/* <Navigation></Navigation> */}
      {/* <AddSub></AddSub> */}
      {/* <Header color={color}></Header>
      <button onClick={handleSubmit}>Change Me</button> */}
      {/* <Body></Body>
      <Footer></Footer> */}
      {/* <Days day={day} setDay={setDay}></Days> */}
      <Day day={day} setDay={setDay}></Day>
    </div>
  );
};

export default Compopasser;
