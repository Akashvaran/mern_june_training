import React, { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // Memoized result, recalculates only when count changes
  const memoizedResult = useMemo(() => expensiveCalculation(count), [count]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={theme}>
      <p>Count: {count}</p>
      <p>Expensive Calculation: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  );
}
