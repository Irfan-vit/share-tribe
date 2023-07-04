import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateUserData = () => {
  const queryClient = useQueryClient()
  const { authData } = useAuth()
  const { user } = JSON.parse(localStorage.getItem('authData'))
  const mutateUserApi = async (userData) => {
    const res = await axios.post(
      `/api/users/edit`,
      {
        ...userData,
      },
      {
        headers: { authorization: authData.token },
      },
    )
    return res.data
  }
  const userDataMutation = useMutation(
    mutateUserApi,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['getUser', user._id], (currentData) => {
          return { ...data.user }
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['getUsers', 'getPosts', 'getUser'])
      },
    },
  )
  return { userDataMutation }
}

export default useMutateUserData
