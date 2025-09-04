import  { useState, useEffect, useCallback } from "react";


function Usecallback() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);


  const getItems =useCallback(() => {
    return [number + 1, number + 2, number + 3];
  },[number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((curr) => !curr)}>
        Toggle Theme
      </button>

      <List getItems={getItems} />
    </div>
  );
}

export default Usecallback;






function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log("Setting items");
  }, [getItems]);

  return (
    <div>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export{List};
