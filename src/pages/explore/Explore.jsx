import Users from '../home/homeModels/users/Users'
import Nav from '../../components/nav/Nav'
import useGetPosts from '../../backend/queryHooks/post/useGetPosts'
import Post from '../../components/post/Post'
import '../home/home.css'

const Explore = () => {
  const { getPostsQuery } = useGetPosts()
  return (
    <>
      <div className="feed">
        <Nav />
        <div>
          <h1>Explore</h1>
          {getPostsQuery.data?.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
        <Users />
      </div>
    </>
  )
}
export default Explore
