import Users from './homeModels/users/Users'
import Nav from '../../components/nav/Nav'
import PostCompose from './homeModels/PostCompose/PostCompose'
import Posts from './homeModels/Posts/Posts'

const Home = () => {
  return (
    <>
      <PostCompose />
      <div></div>
      <Posts />
      <Users />
      <Nav />
    </>
  )
}
export default Home
