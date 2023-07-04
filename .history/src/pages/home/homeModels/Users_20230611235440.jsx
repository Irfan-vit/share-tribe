import useGetUsers from '../../../backend/queryHooks/user/useGetUsers'

const Users = () => {
  const { getUsersQuery } = useGetUsers()
  return (
    <>
      {getUsersQuery?.data?.map((user) => (
        <div style={{backgr}} key={user._id}>
          <p>{user.username}</p>
        </div>
      ))}
    </>
  )
}

export default Users
