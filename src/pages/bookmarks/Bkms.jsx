import useGetBookMarks from '../../backend/queryHooks/bookMark/useGetBookmarks'
import Nav from '../../components/nav/Nav'
import Users from '../home/homeModels/users/Users'
import '../home/home.css'
import Post from '../../components/post/Post'
import useGetPosts from '../../backend/queryHooks/post/useGetPosts'
const Bkms = () => {
  const { getBookMarksQuery } = useGetBookMarks()
  const { getPostsQuery } = useGetPosts()
  const getBookmarkPosts = (postId) =>
    getPostsQuery?.data?.filter((post) => post._id === postId)[0]
  return (
    <>
      <div className="feed">
        <Nav />
        <div>
          <h1>BookMarks</h1>
          {!getBookMarksQuery?.data || getBookMarksQuery?.data.length <= 0 ? (
            <h1>none</h1>
          ) : (
            getBookMarksQuery?.data.map((post) => (
              <Post key={post._id} post={getBookmarkPosts(post._id)} />
            ))
          )}
        </div>
        <Users />
      </div>
    </>
  )
}
export default Bkms
