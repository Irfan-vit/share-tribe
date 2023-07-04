import PostCompose from '../home/homeModels/PostCompose/PostCompose'
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
