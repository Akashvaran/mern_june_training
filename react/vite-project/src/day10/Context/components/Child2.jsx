import React, { useContext } from 'react'
import Userdata from '../context/UserContext'


export const Child2 = () => {
const {userName, emailId}=useContext(Userdata)
  return (
    <div>
      
      <h1>{userName}</h1>
      <h1>{emailId}</h1>
      child2

    </div>
  )
}
