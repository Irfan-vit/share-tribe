import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutatePostsData = () => {
  const queryClient = useQueryClient()
  const { authData } = useAuth()
  const newPostApi = async (postData) => {
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
  const deletePostApi = async (id) => {
    const res = await axios.delete(`/api/posts/${id}`, {
      headers: { authorization: authData.token },
    })
    return res.data
  }
  const editPostApi = async (postData) => {
    const res = await axios.post(
      `/api/posts/edit/${postData._id}`,
      {
        ...postData,
      },
      {
        headers: { authorization: authData.token },
      },
    )
    return res.data
  }
  const addPostsMutation = useMutation(
    newPostApi,
    {
      onSuccess: (data) => {
        console.log(data)
        queryClient.setQueryData(['getPosts'], (currentData) => {
          return [...data]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['getPosts'])
      },
    },
  )
  const deletePostsMutation = useMutation(
    deletePostApi,
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['getPosts'], (currentData) => {
          return [...data]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['getPosts'])
      },
    },
  )
  const editPostsMutation = useMutation(
    editPostApi,
    {
      onSuccess: (data) => {
        console.log(data)
        queryClient.setQueryData(['getPosts'], (currentData) => {
          console.log(currentData)
          return [...data]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['getPosts'])
      },
    },
  )
  return { addPostsMutation, deletePostsMutation, editPostsMutation }
}

export default useMutatePostsData
