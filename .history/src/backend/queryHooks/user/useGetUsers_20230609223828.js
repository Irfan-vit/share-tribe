import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetUsers = () => {
  const getUsersApi = async () => {
    const res = await axios.get('/api/users')
    R
  }
  const getUsersQuery = useQuery(['getUsers'])
}

export default useGetUsers
