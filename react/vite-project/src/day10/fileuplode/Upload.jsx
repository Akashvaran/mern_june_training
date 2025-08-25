import React, { useRef } from 'react'
import { useState } from 'react'

export const Upload = () => {
const [name,setname]=useState('')
const ClickRef=useRef(null)

const clickFile=()=>{
    ClickRef.current.click()
}

const GetImage=(e)=>{
    const file=e.target.files[0]
    if(file){
       setname(file.name)
    }
}

  return (
    <div>
        <input type="file" ref={ClickRef} onChange={GetImage} style={{display:'none'}}/>

        <button onClick={clickFile}>click the button</button>

        <p>{name}</p>
    </div>
  )
}
