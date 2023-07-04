import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetPosts = () => {
  const getBookMarksApi = async () => {
    const res = await axios.get('/api/users/bookmark/')
    return res.data.bookmarks
  }

  const getPostsQuery = useQuery(['getBookMarks'], getPostsApi)

  return { getPostsQuery }
}

export default useGetPosts
