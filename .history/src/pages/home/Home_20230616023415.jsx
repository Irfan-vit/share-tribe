import Users from './homeModels/users/Users'
import Nav from '../../components/nav/Nav'
import PostCompose from './homeModels/PostCompose/PostCompose'
import E
import './home.css'

const Home = () => {
  return (
    <>
      <PostCompose />
      <div className="feed">
        <Nav />
        <Posts />
        <Users />
      </div>
    </>
  )
}
export default Home
