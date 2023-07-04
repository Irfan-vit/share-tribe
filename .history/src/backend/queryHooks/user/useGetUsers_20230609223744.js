import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetUsers = () => {
    const getUsersApi = async ()=> await axios.get
    const getUsersQuery = useQuery(['getUsers'], )
}

export default useGetUsers
