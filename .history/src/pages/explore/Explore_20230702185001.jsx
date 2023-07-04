import Users from '../home/homeModels/users/Users'
import Nav from '../../components/nav/Nav'
import PostsErrorBoundary from '../home/homeModels/Posts/Posts'
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
          <PostsErrorBoundary />
          {useGetPosts.daa}
        </div>
        <Users />
      </div>
    </>
  )
}
export default Explore
