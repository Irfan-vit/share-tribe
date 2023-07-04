import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useMutateToggleFollow = () => {
  const data = JSON.parse(localStorage.getItem('authData'))
  const mutateFollowToggleApi = async (id) => {
    const res = await fetch(`/api/users/follow/${id}`, {
      method: 'POST',
      headers: { authorization: data.token },
    })
    await cont data =  res.data
  }
  const toggleFollowMutation = useMutation(mutateFollowToggleApi)
  return { toggleFollowMutation }
}

export default useMutateToggleFollow
