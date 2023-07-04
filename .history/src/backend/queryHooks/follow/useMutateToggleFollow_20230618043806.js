import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useMutateToggleFollow = () => {
  const data = JSON.parse(localStorage.getItem('authData'))
  const mutateFollowToggleApi = async (id) => {
    const res = await fetch(`/api/users/follow/${user}`, {
      method: 'POST',
      headers: { authorization: data.token },
    })
    return res
  }
  const toggleFollowMutation = useMutation(mutateFollowToggleApi)
  return { toggleFollowMutation }
}

export default useMutateToggleFollow
