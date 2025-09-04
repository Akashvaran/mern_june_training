import React, { useState } from 'react'
// import { useContext } from 'react'
// import UserContext from '../context/UserContext'


export const Home = () => {
    // const {userId}=useContext(UserContext)
    const [uname, setUname] = useState('')
    return (
        <div>

            <input type="text" onChange={(e)=>setUname(e.target.value)}/>

            <h1>{uname}</h1>
        </div>
    )
}
