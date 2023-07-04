import useGetUsers from '../../../backend/queryHooks/user/useGetUsers'

const Users = () => {
  const { getUsersQuery } = useGetUsers()
  return (
    <>
      {/* <div> */}
      {getUsersQuery?.data?.map((user) => (
        <div key={user._id}>
          <p>{user.username}</p>
        </div>
      ))}
      {/* </div> */}
    </>
  )
}

export default Users
