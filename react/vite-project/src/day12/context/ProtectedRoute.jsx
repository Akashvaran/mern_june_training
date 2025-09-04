import React, { useContext } from 'react'
import UserContext from './UserContext'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {
    const {userId}=useContext(UserContext)
  
    if(!userId){
        return <Navigate to={'/'}/>
    }

    return children;
}
