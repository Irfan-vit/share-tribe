import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetUsers = () => {
  const getUsersApi = async () => {
    const res = await axios.get('/api/users')
    return res
  }
  const getUsersQuery = useQuery(['getUsers'])
}

export default useGetUsers
