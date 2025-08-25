import React, { useContext } from 'react'
import UserContext from './Parent'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {
const {userId}=useContext(UserContext)
console.log(userId)

if(userId==="Akash"){
   return <Navigate to={"/"}/>
}

  return children
  
}
