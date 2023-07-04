import Users from './homeModels/Users'
import Nav from '../../components/nav/Nav'
import PostCompose from './homeModels/PostCompose/PostCompose'

const Home = () => {
  return (
    <>
    <PostCompose
      <Users />
      <Nav />
    </>
  )
}
export default Home
