import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useGetBookMarks = () => {
  const getBookMarksApi = async () => {
    const res = await axios.get('/api/users/bookmark/', {
      headers: { authorization: data.token },
    })
    return res.data.bookmarks
  }

  const getBookMarksQuery = useQuery(['getBookMarks'], getBookMarksApi)

  return { getBookMarksQuery }
}

export default useGetBookMarks
