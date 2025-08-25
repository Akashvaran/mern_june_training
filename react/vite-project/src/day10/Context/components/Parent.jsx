import React from 'react'
import Userdata from '../context/UserContext';


export const Parent = ({ children }) => {
  const userName = "Akash Varan";
  const emailId = "akash123@gmail.com"
  return (
    <Userdata.Provider value={{ userName, emailId }}>

      {children}

    </Userdata.Provider>

  )
}
