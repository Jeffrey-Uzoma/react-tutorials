import { createContext, useState } from "react";

const userContext = createContext()

export default function userProvider(children){
  const [user, setUser] = useState()

  const login = (usersInfo) => setUser(usersInfo)
  const logout = () => setUser(null)
  
  return (
    <userContext.Provider value={{user, login, logout}}>
      {children}
    </userContext.Provider>
  )
}