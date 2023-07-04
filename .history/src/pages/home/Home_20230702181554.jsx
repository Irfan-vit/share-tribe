import Users from './homeModels/users/Users'
import Nav from '../../components/nav/Nav'
import PostCompose from './homeModels/PostCompose/PostCompose'
import PostsErrorBoundary from './homeModels/Posts/Posts'
import './home.css'

const Home = () => {
  return (
    <>
      <PostCompose />
      <div className="feed">
        <Nav />
        <div>
          <PostsErrorBoundary />
        </div>
        <Users />
      </div>
    </>
  )
}
export default Home
