import Users from '../home/homeModels/users/Users'
import Nav from '../../components/nav/Nav'
import PostsErrorBoundary from '../home/homeModels/Posts/Posts'
import './home.css'

const Explore = () => {
  return (
    <>
      <h1>Explore</h1>
      <div className="feed">
        <Nav />
        <PostsErrorBoundary />
        <Users />
      </div>
    </>
  )
}
export default Explore
