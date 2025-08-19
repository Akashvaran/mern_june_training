
// import { useState } from 'react'

// export const Day3 = () => {
//     // const [data] = useState(["Apple", "Akash", "kanna", "kumar", "Apple", "Akash", "kanna", "kumar"])
//     // const[data]=useState({name:"Akash",Age:25,Mobile:1234567890})

//     const[data]=useState([
//         {id:"yufwygfyi",name:"Akash",Age:25,Mobile:1234567890},
//         {id:"yufwygfyi",name:"Akash",Age:25,Mobile:1234567890},
//         {id:"yufwygfyi",name:"Akash",Age:25,Mobile:1234567890},
//         {id:"yufwygfyi",name:"Akash",Age:25,Mobile:1234567890}

//     ])

//     return (
//         <>
//             {/* {data.map((value, index) => (
//                 <li key={index}>{value}</li>
//             ))} */}

//             {/* <li>{data.name}</li>
//             <li>{data.Age}</li>
//             <li>{data.Mobile}</li> */}

//             {data.map((datas)=>(
//                 <ul key={datas.id}>
//                     <li>{datas.name}</li> 
//                     <li>{datas.Age}</li> 
//                     <li>{datas.Mobile}</li> 
//                 </ul>
//             ))}

            

//         </>
//     )
// }


import React from 'react'
import { Child } from './Child';

export const Day3 = () => {
    const name="Akash";
    const age=25;
  return (
    <>        
    <Child username={name} userage={age}/>
    </>
  )
}
