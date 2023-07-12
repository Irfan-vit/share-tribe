import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateUserData = () => {
  const queryClient = useQueryClient()
  const { authData } = useAuth()
  const { user } = JSON.parse(localStorage.getItem('authData'))
  const { token } = JSON.parse(localStorage.getItem('authData'))
  console.log(token, 'ad')
  const mutateUserApi = async (userData) => {
    const res = await axios.post(
      `/api/users/edit`,
      {
        ...userData,
      },
      {
        headers: { authorization: token },
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
  return { userDataMutation }
}

export default useMutateUserData
