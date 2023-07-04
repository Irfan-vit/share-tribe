import Users from '../home/homeModels/users/Users'
import Nav from '../../components/nav/Nav'
import PostsErrorBoundary from '../home/homeModels/Posts/Posts'
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
