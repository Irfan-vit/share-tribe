import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPosts = (id, user) => {
  const ud = JSON.parse(localStorage.getItem('authData'))
    console.log(ud.user._id)
  const getPostsApi = async () => {
    const res = await axios.get('/api/posts')
    return res.data.posts
  }
  const getPostApi = async ({ queryKey }) => {
    const id = queryKey[1]
    console.log(id)
    const res = await axios.get(`/api/posts/${id}`)
    return res.data.post
  }
  const getUserPostApi = async ({ queryKey }) => {
    const user = queryKey[2]
    const res = await axios.get(`/api/posts/${user}`)
    return res.data.posts
  }
  const getPostsQuery = useQuery(['getPosts'], getPostsApi)
  const getPostQuery = useQuery(['getPost', ud.user._id], getPostApi, {
    enabled: !!ud.user._id,
  })
  const getUserPostsQuery = useQuery(['getUserPosts', user], getUserPostApi, {
    enabled: !!user,
  })

  return { getPostsQuery, getPostQuery, getUserPostsQuery }
}

export default useGetPosts
