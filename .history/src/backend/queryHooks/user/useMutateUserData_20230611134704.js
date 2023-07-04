import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useMutateUserData = () => {
  const mutateUserApi = async (userData) => {
    const res = await axios.post(`/api/users/edit`, userData)
    console.log(res.data)
    return res.data
  }
  const useDataMutation = useMutation(mutateUserApi)
}

export default useMutateUserData
