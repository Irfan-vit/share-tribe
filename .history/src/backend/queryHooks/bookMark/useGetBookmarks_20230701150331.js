import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPosts = () => {
  const getPostsApi = async () => {
    const res = await axios.get('/api/users/bookmark/')
    return res.data.posts
  }

  const getPostsQuery = useQuery(['getPosts'], getPostsApi)

  return { getPostsQuery }
}

export default useGetPosts
