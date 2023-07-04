import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPosts = (id = null, user = 'adarshbalika') => {
  const getPostsApi = async () => {
    const res = await axios.get('/api/posts')
    return res.data.posts
  }
  const getPostApi = async ({ queryKey }) => {
    const id = queryKey[1]
    const res = await axios.get(`/api/posts/${id}`)
    return res.data.post
  }
  const getUserPostApi = async ({ queryKey }) => {
    const user = 'adarshbalika'
    const res = await axios.get(`/api/posts/${user}`)
    return res.data.posts
  }
  const getPostsQuery = useQuery(['getPosts'], getPostsApi)
  const getPostQuery = useQuery(['getPost', id], getPostApi)
  const getUserPostsQuery = useQuery(
    ['getUserPosts', 'adarshbalika'],
    getUserPostApi,
  )

  return { getPostsQuery, getPostQuery, getUserPostsQuery }
}

export default useGetPosts
