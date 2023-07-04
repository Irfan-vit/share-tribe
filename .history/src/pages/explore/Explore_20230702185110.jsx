import Users from '../home/homeModels/users/Users'
import Nav from '../../components/nav/Nav'
import useGetPosts from '../../backend/queryHooks/post/useGetPosts'
import Post from '../../components/post/Post'
import '../home/home.css'

const Explore = () => {
  const { getPostsQuery } = useGetPosts()
  return (
    <>
      <h1>Explore</h1>
      <div className="feed">
        <Nav />
        <div>
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
