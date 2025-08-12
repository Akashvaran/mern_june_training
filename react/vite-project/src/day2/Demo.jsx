// import React from 'react'

import { useState } from "react"

// export const Demo = () => {
//     // const data=["Akash",25,1234567890];
//     // const [name,age,mobile]=data
    
//     const data={
//         names:"akash",
//         age:25,
//         mobile:1234567890,
//         gender:"male"
//     }

//     const{names,age,mobile,gender}=data

//   return (
//     <div>
//         {/* <li>{name}</li>
//         <li>{age}</li>
//         <li>{mobile}</li> */}
//         <li>{names}</li>
//         <li>{age}</li>
//         <li>{mobile}</li>
//         <li>{gender}</li>
//     </div>
//   )
// }


// export const demo = () => {

//      let count=0 

//     function increment(){
//        count++
//        document.getElementById("hello").textContent=count;
//     }
//      function decrement(){
//        count--
//        document.getElementById("hello").textContent=count;     
//     }
//   return (
//     <div>
//         <p id="hello">{count}</p>
//         <button onClick={increment}>+</button>
//         <button onClick={decrement}>-</button>

//     </div>
//   )
// }




// const Demo = () => {
//    const[count,setCount]=useState(0)

//    function add(){
//     setCount(count+1)
//    }

//    function dec(){
//     setCount(count-1)
//    }

//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={add}>+</button>
//         <button onClick={dec}>+</button>
        
//     </div>
//   )
// }

// export default Demo



export const Demo = () => {
    // const[count,setCount]=useState("akash")
    const[count,setCount]=useState({})
  return (
    <div>{count}

        <button onClick={()=>setCount("akash varan")}> ge</button>
    </div>
  )
}
