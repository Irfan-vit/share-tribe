import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useMutateToggleFollow = () => {
  const data = JSON.parse(localStorage.getItem('authData'))
  console.log(data.token)
  const mutateFollowToggleApi = async (id) => {
    const res = await axios.post(`/api/users/follow/${id}`, {
      headers: { authorization: data.token },
    })
    return res
  }
  const toggleFollowMutation = useMutation(mutateFollowToggleApi)
  return { toggleFollowMutation }
}

export default useMutateToggleFollow
