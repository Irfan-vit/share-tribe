import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useMutateToggleLike = () => {
  const data = JSON.parse(localStorage.getItem('authData'))
  const mutateLikeToggleApi = async (
    user = 'c32e8a58-6e47-4dfb-83ce-23d9792ffbac',
  ) => {
    try {
      const res = await axios.post(
        `/api/users/follow/${user}`,
        {},
        {
          headers: { authorization: data.token },
        },
      )
      return res.data
    } catch (error) {
      console.error(error)
    }
  }
  const mutateUnToggleApi = async (
    user = 'c32e8a58-6e47-4dfb-83ce-23d9792ffbac',
  ) => {
    try {
      const res = await axios.post(
        `/api/users/unfollow/${user}`,
        {},
        {
          headers: { authorization: data.token },
        },
      )
      return res.data
    } catch (error) {
      console.error(error)
    }
  }
  const toggleFollowMutation = useMutation(mutateLikeToggleApi)
  const toggleUnfollowMutation = useMutation(mutateUnToggleApi)
  return { toggleFollowMutation, toggleUnfollowMutation }
}

export default useMutateToggleLike
