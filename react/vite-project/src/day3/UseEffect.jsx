import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEffect = () => {
    const [count, setCount]=useState(0)
    const [name, setName]=useState("akash")


    useEffect(()=>{
        console.log("component is render")
    },[count])
  return (
    <div>
        <p>{count}</p>

        <h1>{name}</h1>

        <button onClick={()=>setCount(count+1)}>+</button>

        <button onClick={()=>setName("arun")}>click</button>

    </div>
  )
}
