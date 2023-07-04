import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutatePostsData = () => {
  const  = useQueryClient()
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
        useQueryClient.setQueryData(['wishlist', token], (currentUser) => {
          return [...data]
        })
      },
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(['wishlist'])
      },
    },
  )
  const deletePostsMutation = useMutation(deletePostApi)
  const editPostsMutation = useMutation(editPostApi)
  return { addPostsMutation, deletePostsMutation, editPostsMutation }
}

export default useMutatePostsData
