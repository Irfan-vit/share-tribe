import Users from './homeModels/users/Users'
import Nav from '../../components/nav/Nav'
import PostCompose from './homeModels/PostCompose/PostCompose'
import Posts from './homeModels/Posts/Posts'

const Home = () => {
  return (
    <>
      <PostCompose />
      <div style={{ display: 'flex' }}>
        <Posts />
        <Users />
      </div>
    </>
  )
}
export default Home
