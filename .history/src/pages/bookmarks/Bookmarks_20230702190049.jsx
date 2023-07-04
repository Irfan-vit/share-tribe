import useGetBookMarks from '../../backend/queryHooks/bookMark/useGetBookmarks'
import Nav from '../../components/nav/Nav'
import Users from '../home/homeModels/users/Users'
import '../home/home.css'
import Post from '../../components/post/Post'
const Bookmarks = () => {
  const { getBookMarksQuery } = useGetBookMarks()
  console.log(getBookMarksQuery?.data, 'bms')
  return (
    <>
      <div className="feed">
        <Nav />
        <div>
          {!getBookMarksQuery?.data || getBookMarksQuery?.data getBookMarksQuery?.data.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
        <Users />
      </div>
    </>
  )
}
export default Bookmarks
