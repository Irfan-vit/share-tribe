import useGetUsers from '../../../backend/queryHooks/user/useGetUsers'

const Users = () => {
  const { getUsersQuery } = useGetUsers()
  return (
    <>
      <div>
        {getUsersQuery?.data?.map((user) => (
          <div key={user._id}>
            <div></div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Users
