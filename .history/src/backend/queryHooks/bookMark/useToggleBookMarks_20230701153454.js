import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutatePostsData = () => {
  const queryClient = useQueryClient()
  const { authData } = useAuth()
  const addBookMarkApi = async (postData) => {
    const res = await axios.post(
      `/api/posts`,
      {
        ...postData,
      },
      {
        headers: { authorization: authData.token },
      },
    )
    return res.data
  }
  const deleteBookMarkApi = async (id) => {
    const res = await axios.delete(`/api/posts/${id}`, {
      headers: { authorization: authData.token },
    })
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

export default useMutatePostsData
