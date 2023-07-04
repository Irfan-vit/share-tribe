import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateFollowers = () => {
  const { authData } = useAuth()
  const mutateUserApi = async (followers) => {
    const res = await axios.post(
      `/api/users/edit`,
      {
        ...Followers,
      },
      {
        headers: { authorization: authData.token },
      },
    )
    return res.data
  }
  const FollowersMutation = useMutation(mutateUserApi)
  return { FollowersMutation }
}

export default useMutateFollowers
