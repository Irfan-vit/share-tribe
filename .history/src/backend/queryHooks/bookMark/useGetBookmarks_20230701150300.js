import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPosts = () => {
  const ud = JSON.parse(localStorage.getItem('authData'))
  const getPostsApi = async () => {
    const res = await axios.get('/api/users/bookmark/')
    return res.data.posts
  }

  const getPostsQuery = useQuery(['getPosts'], getPostsApi)

  const getUserPostsQuery = useQuery(
    ['getUserPosts', ud.user.username],
    getUserPostApi,
    {
      enabled: !!ud.user.username,
    },
  )

  return { getPostsQuery, getPostQuery, getUserPostsQuery }
}

export default useGetPosts
