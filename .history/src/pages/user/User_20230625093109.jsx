import Nav from '../../components/nav/Nav'
import PostCompose from '../home/homeModels/PostCompose/PostCompose'
import Users from '../home/homeModels/users/Users'
import UserCard from './userModals/UserCard'
const User = () => {
  return (
    <>
      <PostCompose />
      <div className="feed">
        <Nav />
        <UserCard />
        <Users />
      </div>
    </>
  )
}
export default User
