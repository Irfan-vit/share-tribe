import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateUserData = () => {
  const queryClient = useQueryClient()
  const { authData } = useAuth()
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
        queryClient.setQueryData(['getUser'], (currentData) => {
          return [...data.posts]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['getUser'])
      },
    },
  )
  return { userDataMutation }
}

export default useMutateUserData
