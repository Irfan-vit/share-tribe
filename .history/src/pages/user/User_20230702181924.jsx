import Nav from '../../components/nav/Nav'
import PostsErrorBoundary from '../home/homeModels/Posts/Posts'
import Users from '../home/homeModels/users/Users'
import UserCard from './userModals/UserCard'
const User = () => {
  return (
    <>
      <div className="feed">
        <Nav />
        <div></div>
        <UserCard />
        <Users />
      </div>
      <PostsErrorBoundary />
    </>
  )
}
export default User
