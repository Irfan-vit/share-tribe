import { createContext, useContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user,setUser] = 
  return (
    <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
  )
}
