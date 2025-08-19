import { useState } from "react";
const Counter = () => {
  let [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    // to set max value of 20
    if (counter >= 20) {
      console.log("max count limit reached!!!");
      setCounter(20);
    } else {
      setCounter(counter + 1);
    }

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
  };
  const decreaseCounter = () => {
    // to set min value of 0
    if (counter <= 0) {
      console.log("min count limit reached!!!");
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h4>Current counter value is : {counter}</h4>
      <button
        onClick={increaseCounter}
        className="bg-gray-600 rounded-2xl p-1 mr-1"
      >
        Increase Counter
      </button>
      <button onClick={decreaseCounter} className="bg-gray-600 rounded-2xl p-1">
        Decrease Counter
      </button>
    </>
  );
};

export default Counter;
