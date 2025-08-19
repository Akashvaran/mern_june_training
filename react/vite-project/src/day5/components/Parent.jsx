import React from 'react'
import { Child1 } from './Child1';
import Userdata from '../context/UserContext';
import { Child2 } from './Child2';

export const Parent = () => {
    const userName = "Akash Varan";
    const emailId = "akash123@gmail.com"
    return (
        <Userdata.Provider value={{userName,emailId}}>

          <Child2/>
          
        </Userdata.Provider>

    )
}
