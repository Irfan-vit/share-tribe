import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useMutateUserData = () => {
  const mutateUserApi = async (userData) => {
    const res = await axios.post(`/api/users/edit`, userData,,
    {
      headers: { authorization: token },
    },)
    console.log(res.data)
    return res.data
  }
  const userDataMutation = useMutation(mutateUserApi)
  return { userDataMutation }
}

export default useMutateUserData
