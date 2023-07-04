import Users from './homeModels/users/Users'
import Nav from '../../components/nav/Nav'
import PostCompose
import PostsErrorBoundary from './homeModels/Posts/Posts'
import './home.css'

const Home = () => {
  return (
    <>
      <div className="feed">
        <Nav />
        <PostsErrorBoundary />
        <Users />
      </div>
    </>
  )
}
export default Home
