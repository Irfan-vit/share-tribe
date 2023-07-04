import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetBookMarks = () => {
  const getBookMarksApi = async () => {
    const res = await axios.get('/api/users/bookmark/')
    return res.data.bookmarks
  }

  const getBookMarkQuery = useQuery(['getBookMarks'], getBookMarksApi)

  return { getPostsQuery }
}

export default useGetBookMarks
