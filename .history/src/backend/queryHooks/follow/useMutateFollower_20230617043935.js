import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateFollower = () => {
  const { authData } = useAuth()
  const mutateUserApi = async (follower) => {
    const res = await axios.post(
      `/api/users/follow/:followUserId`,
      {},
      {
        headers: { authorization: authData.token },
      },
    )
    return res.data
  }
  const FollowerMutation = useMutation(mutateUserApi)
  return { FollowerMutation }
}

export default useMutateFollower
