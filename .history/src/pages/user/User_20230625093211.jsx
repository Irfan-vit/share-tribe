import Nav from '../../components/nav/Nav'
import PostCompose from '../home/homeModels/PostCompose/PostCompose'
import PostsErrorBoundary from '../home/homeModels/Posts/Posts'
import Users from '../home/homeModels/users/Users'
import UserCard from './userModals/UserCard'
const User = () => {
  return (
    <>
      <div className="feed">
        <Nav />
        <UserCard />
        <Users />
      </div>
    </>
  )
}
export default User
