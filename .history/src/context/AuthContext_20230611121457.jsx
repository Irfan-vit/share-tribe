import { createContext, useContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user,setUser] = userSta
  return (
    <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
  )
}
