const UserCard = () => {
  const { user } = JSON.parse(localStorage.getItem('authData'))
  console.log(user)
  return (
    <>
      <div>{user}</div>
    </>
  )
}
export default UserCard
