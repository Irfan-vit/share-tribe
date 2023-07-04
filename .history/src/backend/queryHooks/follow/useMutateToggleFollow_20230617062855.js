import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateToggleFollow = () => {
  const { authData } = useAuth()
  console.log(authData.token)
  const mutateFollowToggleApi = async (id) => {
    console.log(id)
    const res = await axios.post(`/api/users/follow/${id}`, {
      headers: { authorization: authData.token },
    })
    return res.data
  }
  const toggleFollowMutation = useMutation(mutateFollowToggleApi)
  return { toggleFollowMutation }
}

export default useMutateToggleFollow
