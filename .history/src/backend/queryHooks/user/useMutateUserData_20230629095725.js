import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateUserData = () => {
  const queryClient = useQueryClient()
  const { authData } = useAuth()
  const { user } = JSON.parse(localStorage.getItem('authData'))
  console.log(user._id)
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
        console.log(queryClient.getQueriesData(['getUser']))
        queryClient.setQueryData(['getUser'], (currentData) => {
          console.log(data)
          // return [...data.posts]
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
