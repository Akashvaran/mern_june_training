
import { createContext } from 'react'


const UserContext = createContext()

export default UserContext


export const Parent = ({ children }) => {
    const userId ="Akas";

    return (
        <UserContext.Provider value={{ userId }}>
            {children}
        </UserContext.Provider>
    )
}
