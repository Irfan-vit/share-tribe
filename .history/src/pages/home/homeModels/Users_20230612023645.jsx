import useGetUsers from '../../../backend/queryHooks/user/useGetUsers'

const Users = () => {
  const { getUsersQuery } = useGetUsers()
  return (
    <>
      {getUsersQuery?.data?.map((user) => (
        <div style={{ backgroundColor: 'red', display: 'flex' }} key={user._id}>
          <p>{user.username}</p>
        </div>
      ))}
    </>
  )
}

export default Users
