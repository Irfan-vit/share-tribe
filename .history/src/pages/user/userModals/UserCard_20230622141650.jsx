import './userCard.css'
const UserCard = () => {
  const { user } = JSON.parse(localStorage.getItem('authData'))
  console.log(user)
  return (
    <>
      <div className="user-card-container">
        <div className="user-card-image-container">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <div>{user.userName</div>
        </div>
        <div>
          <p>frontend dev</p>
          <a href="www.google.com">profile link</a>
        </div>
      </div>
    </>
  )
}
export default UserCard
