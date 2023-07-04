import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPosts = (id = null, user = null) => {
  const getPostsApi = async () => {
    const res = await axios.get('/api/posts')
    console.log(res.data.users)
    return res.data.users
  }
  const getPostApi = async ({ queryKey }) => {
    const id = queryKey[1]
    const res = await axios.get(`/api/posts/${id}`)
    return res.data.user
  }
  const getUserPostApi = async ({ queryKey }) => {
    const user = queryKey[2]
    const res = await axios.get(`/api/posts/${user}`)
    return res.data.user
  }
  const getPostsQuery = useQuery(['getPosts'], getPostsApi)
  const getPostQuery = useQuery(['getPost', id], getPostApi)
  const getUserPostsQuery = useQuery(['getUserPosts'], getUserPostApi)

  return { getPostsQuery, getPostQuery, getUserPostsQuery }
}

export default useGetPosts
