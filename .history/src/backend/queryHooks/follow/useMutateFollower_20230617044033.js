import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateFollower = () => {
  const { authData } = useAuth()
  const mutateUserApi = async (id) => {
    const res = await axios.post(
      `/api/users/follow/${id}`,
      {},
      {
        headers: { authorization: authData.token },
      },
    )
    return res.data
  }
  const followerMutation = useMutation(mutateUserApi)
  return { followerMutation }
}

export default useMutateFollower
