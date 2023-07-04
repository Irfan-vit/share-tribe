import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useMutateUserData = () => {
  const mutateUserApi = async ( UserData }) => {
    const res = await axios.post(`/api/users/edit`, { ...userData })
    console.log(res.data)
    return res.data
  }
  const userDataMutation = useMutation(mutateUserApi)
}

export default useMutateUserData
