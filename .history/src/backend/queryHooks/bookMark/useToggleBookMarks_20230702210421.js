import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutateBookMarksData = () => {
  const queryClient = useQueryClient()
  const { authData } = useAuth()
  const addBookMarkApi = async (id) => {
    const res = await axios.post(
      `/api/users/bookmark/${id}`,
      {},
      {
        headers: { authorization: authData.token },
      },
    )
    return res.data
  }
  const deleteBookMarkApi = async (id) => {
    const res = await axios.post(
      `/api/users/remove-bookmark/${id}`,
      {},
      {
        headers: { authorization: authData.token },
      },
    )
    console.log(res.data, 'remove data')
    return res.data
  }
  const addBookMarkMutation = useMutation(
    addBookMarkApi,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['getBookMarks'], (currentData) => {
          return [...data.bookmarks]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['getBookMarks'])
      },
    },
  )
  const deleteBookMarkMutation = useMutation(
    deleteBookMarkApi,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['getBookMarks'], (currentData) => {
          return [...data.bookmarks]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['getBookMarks'])
      },
    },
  )
  return { addBookMarkMutation, deleteBookMarkMutation }
}

export default useMutateBookMarksData
