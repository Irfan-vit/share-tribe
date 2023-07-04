import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPosts = (id = null, user = 'adarshbalika') => {
  const _id = JSON.parse(localStorage.getItem('authData'))
  console.log(_id.user)
  const getPostsApi = async () => {
    const res = await axios.get('/api/posts')
    return res.data.posts
  }
  const getPostApi = async ({ queryKey }) => {
    const id = queryKey[1]
    const res = await axios.get(`/api/posts/${_id}`)
    return res.data.post
  }
  const getUserPostApi = async ({ queryKey }) => {
    const username = 'adarshbalika'
    const res = await axios.get(`/api/posts/${username}`)
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
