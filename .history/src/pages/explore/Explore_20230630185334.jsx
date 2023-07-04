import Users from './homeModels/users/Users'
import Nav from '../../components/nav/Nav'
import PostCompose from '../home/homeModels/PostCompose/PostCompose'
import PostsErrorBoundar from './homeModels/Posts/Posts'
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
