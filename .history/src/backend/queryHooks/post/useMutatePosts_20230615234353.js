import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'

const useMutatePostsData = () => {
  const { authData } = useAuth()
  console.log(authData, 'inside')
  const postPostsApi = async (postData) => {
    console.log(postData, 'inside')
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
  const postsMutation = useMutation(postPostsApi)
  return { postsMutation }
}

export default useMutatePostsData
