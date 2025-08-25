import React, { useState, useCallback } from "react";

// with out usecallback
// export default function Callback() {
//     const [count, setCount] = useState(0);
//     const [theme, setTheme] = useState("light");

//     const increment = () => setCount(count + 1);

//     return (
//         <div>
//             <h1>{count}</h1>
//             <Child value={increment}/>
//             <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//                 Toggle Theme
//             </button>
//         </div>
//     );
// }

// function Child({value}) {
//     console.log("the child is calling")
//     return (
//         <>
//         <button onClick={value}>click</button>
//         </>
//     )
// }

// with useCallback

export default function Callback() {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("light");

    const increment = useCallback(() => {
        setCount(count+1);
    }, [count]);


    return (
        <div>
            <h1>{count}</h1>
            <Child value={increment} />
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                Toggle Theme
            </button>
        </div>
    );
}

function Child({ value }) {
    console.log("the child is calling")
    return (
        <>
            <button onClick={value}>click</button>
        </>
    )
}
