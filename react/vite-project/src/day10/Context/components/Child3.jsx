import { useContext } from "react"
import Userdata from "../context/UserContext"




export const Child3 = () => {
const {userName, emailId}=useContext(Userdata)
  return (
    <div>
        
        child3
       
      <h1>{userName}</h1>
      <h1>{emailId}</h1>

    </div>
  )
}
