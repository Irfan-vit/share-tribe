import { Navigate, useLocation } from 'react-router-dom'

export default function RequiresAuth({ children }) {
 const 
  const location = useLocation()
  return token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
