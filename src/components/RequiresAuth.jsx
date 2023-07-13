import { Navigate, useLocation } from 'react-router-dom'
// import useAuth

export default function RequiresAuth({ children }) {
  const data = JSON.parse(localStorage.getItem('authData'))
  const token = data?.token
  const location = useLocation()
  return !token || token === null ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    children
  )
}
