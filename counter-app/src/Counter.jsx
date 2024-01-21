import React, { useState } from "react";
import "./App.css";
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <h2>Count Value: {count}</h2>
      <div className="btn">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
};
