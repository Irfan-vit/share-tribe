import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPosts = (id = '', user = '') => {
  const getPostsApi = async () => {
    const res = await axios.get('/api/posts')
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
  const getUsersQuery = useQuery(['getUsers'], getPostsApi)
  const getUserQuery = useQuery(['getUser', id], getPostApi)
  const 

  return { getUsersQuery, getUserQuery }
}

export default useGetPosts
