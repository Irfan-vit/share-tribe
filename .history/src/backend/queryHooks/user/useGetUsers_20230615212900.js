import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetUsers = () => {
  const getUsersApi = async () => {
    const res = await axios.get('/api/users')
    return res.data.users
  }
  const getUserApi = async ({ queryKey }) => {
    const res = await axios.get(`/api/users/${id}`)
    return res.data.user
  }
  const getUsersQuery = useQuery(['getUsers'], getUsersApi)
  const getUserQuery = useQuery(['getUser'], getUserApi)

  return { getUsersQuery, getUserQuery }
}

export default useGetUsers
