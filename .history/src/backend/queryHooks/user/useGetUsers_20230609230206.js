import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetUsers = (id) => {
  const getUsersApi = async () => {
    const res = await axios.get('/api/users')
    return res.data.users
  }
  const getUserApi = async () => {
    const res = await axios.get('/api/users/')
    return res.data.users
  }
  const getUsersQuery = useQuery(['getUsers'], getUsersApi)
  const getUserQuery = useQuery(['getUsers'], getUserApi)

  return { getUsersQuery }
}

export default useGetUsers
