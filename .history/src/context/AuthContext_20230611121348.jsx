import { createContext, useContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider v>{children}</AuthContext.Provider>
  )
}
