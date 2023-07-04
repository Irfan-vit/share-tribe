import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const useMutateToggleFollow = () => {
  const queryClient = useQueryClient()
  const data = JSON.parse(localStorage.getItem('authData'))
  const mutateFollowToggleApi = async (
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
  const mutateUnfollowToggleApi = async (
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
  const toggleFollowMutation = useMutation(
    mutateFollowToggleApi,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['getUser', user._id], (currentData) => {
          return { ...data.user }
        })
        queryClient.setQueryData(['getUsers'], (currentData) => {
          return [...data.users]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['getUsers', 'getPosts', 'getUser'])
      },
    },
  )
  const toggleUnfollowMutation = useMutation(mutateUnfollowToggleApi)
  return { toggleFollowMutation, toggleUnfollowMutation }
}

export default useMutateToggleFollow
