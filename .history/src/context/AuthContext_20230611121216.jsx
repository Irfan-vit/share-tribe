import { createContext, useContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  return <AuthProvider.value={{}}>{children}</AuthProvider>
}
