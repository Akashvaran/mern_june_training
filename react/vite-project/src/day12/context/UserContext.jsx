import { createContext } from "react";

const UserContext=createContext()
export default UserContext;



export const UserProvider = ({children}) => {

    const userId='joewoij'

  return (
    <UserContext.Provider value={{userId}}>
        {children}
    </UserContext.Provider>
  )
}
