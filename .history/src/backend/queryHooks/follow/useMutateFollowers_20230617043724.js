import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutate = () => {
  const { authData } = useAuth()
  const mutateUserApi = async () => {
    const res = await axios.post(
      `/api/users/edit`,
      {
        ...,
      },
      {
        headers: { authorization: authData.token },
      },
    )
    return res.data
  }
  const Mutation = useMutation(mutateUserApi)
  return { Mutation }
}

export default useMutate
