const UserCard = () => {
  const { user } = JSON.parse(localStorage.getItem('authData'))
  console.log(user)
  return (
    <>
      <div>
        <div></div>
      </div>
    </>
  )
}
export default UserCard
