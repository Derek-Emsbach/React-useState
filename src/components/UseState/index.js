import { useState } from "react";
import "./UseState.css";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className={theme}>
      <h1>UseState Component</h1>
      {/* Dark */}
      <button onClick={() => setTheme("dark")}>Dark</button>
      {/* Light */}
      <button onClick={() => setTheme("light")}>Light</button>
      <h2> {count} </h2>
      {/* Increment */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      {/* // Decrement */}
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
