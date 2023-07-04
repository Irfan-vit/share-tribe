import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useMutateToggleFollow = () => {
  const data = JSON.parse(localStorage.getItem('authData'))
  const mutateFollowToggleApi = async (
    user = 'c32e8a58-6e47-4dfb-83ce-23d9792ffbac',
  ) => {
    try {
      const response = await fetch(`/api/users/follow/${user}`, {
        method: 'POST',
        headers: { authorization: data.token },
      })
      const responseData = await response.json()
      console.log(responseData)
      return responseData
    } catch (error) {
      console.error(error)
    }
  }
  const toggleFollowMutation = useMutation(mutateFollowToggleApi)
  return { toggleFollowMutation }
}

export default useMutateToggleFollow
