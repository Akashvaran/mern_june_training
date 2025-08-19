import React, { useContext } from 'react'
import Userdata from '../context/UserContext'


export const Child3 = () => {
    const {userName,emailId}=useContext(Userdata)
  return (
    <div>
        <p>{userName}</p>
        <p> {emailId}</p>
        
       

    </div>
  )
}
