import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetUsers = () => {
  const getUsersApi = async () => {
    const res = await axios.get('/api/users')
    return res.data.users
  }
  const getUsersQuery = useQuery(['getUsers'], getUsersApi)

  return {getUsersQuery}
}

export default useGetUsers
