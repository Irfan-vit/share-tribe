import UserCard from './userModals/UserCard'
const User = () => {
  return (
    <>
      <UserCard />
    </>
        <>
        <PostCompose />
        <div className="feed">
          <Nav />
          <PostsErrorBoundary />
          <Users />
        </div>
      </>
  )
}
export default User
