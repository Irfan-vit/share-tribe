import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateToggleFollow = () => {
  const data = JSON.parse(localStorage.getItem('authData'))
  
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
