import React, { useState } from "react";

const AddSub = () => {
  // const [add, setAdd] = useState(0);

  // const [sub, setsub] = useState(0);
  // const handleClick = () => {
  //   setAdd(add + 1);
  // };
  // const handleClick1 = () => {
  //   setsub(sub - 1);
  // };
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick1 = () => {
    setCount(count - 1);
  };
  return (
    <div>
      {count}
      <br />
      <button onClick={handleClick}>Add</button>
      <button onClick={handleClick1}>Sub</button>
    </div>
  );
};
export default AddSub;
