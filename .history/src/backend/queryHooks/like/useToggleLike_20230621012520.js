import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useMutateToggleLike = () => {
  const data = JSON.parse(localStorage.getItem('authData'))
  const mutateLikeToggleApi = async (
    user = 'c32e8a58-6e47-4dfb-83ce-23d9792ffbac',
  ) => {
    try {
      const res = await axios.post(
        `/api/posts/like/${user}`,
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
  const mutateDislikeToggleApi = async (
    user = 'c32e8a58-6e47-4dfb-83ce-23d9792ffbac',
  ) => {
    try {
      const res = await axios.post(
        `/api/posts/dislike/${user}`,
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
  const toggleLikeMutation = useMutation(mutateLikeToggleApi)
  const toggleLikeMutation = useMutation(mutateLikeToggleApi)
  const toggleDislikeMutation = useMutation(mutateDislikeToggleApi)
  return { toggleLikeMutation, toggleDislikeMutation }
}

export default useMutateToggleLike
