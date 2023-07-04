import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutatePostsData = () => {
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
    console.log(res.data)
    return res.data
  }
  const deletePostApi = async (id) => {
    console.log(id, 'inside')
    const res = await axios.delete(`/api/posts/${id}`, {
      headers: { authorization: authData.token },
    })
    console.log(res.data)
    return res.data
  }
  const editPostApi = async (postData) => {
    console.log(postData, 'inside id')
    const res = await axios.post(
      `/api/posts/edit/${postData._id}`,
      {
        ...postData,
      },
      {
        headers: { authorization: authData.token },
      },
    )
    console.log(res.data)
    return res.data
  }
  const addPostsMutation = useMutation(newPostApi)
  const deletePostsMutation = useMutation(deletePostApi)
  const editPostsMutation = useMutation(editPostApi)
  return { addPostsMutation, deletePostsMutation, editPostsMutation }
}

export default useMutatePostsData
