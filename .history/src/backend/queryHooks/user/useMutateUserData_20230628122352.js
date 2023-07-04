import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateUserData = () => {
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
        queryClient.setQueryData(['getPosts'], (currentData) => {
          return [...data.posts]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['getPosts'])
      },
    },
  )
  return { userDataMutation }
}

export default useMutateUserData
