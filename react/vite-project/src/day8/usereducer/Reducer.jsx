import React, { useReducer } from 'react'
const value = { count: 0 }

function counter(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }

        case "decrement":
            return { count: state.count - 1 }
        
        default:
            return { count: state.count = 0 }
    }

}
export const Reducer = () => {

    const [state, dispatch] = useReducer(counter, value)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>

        </div>
    )
}
