import React from "react";
import{ useState } from "react";

const Child=React.memo(({ count })=> {
  console.log("Child Rendered");
  return <p>Hello, {count}</p>;
}) 

export default function ReactMemo() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);


  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={theme}>
      
      <button onClick={() => setCount(count + 1)}>Increment Count</button>


      <button onClick={() => setDark(!dark)}>Toggle Theme</button>



      <Child count={count} />
    </div>
  );
}
