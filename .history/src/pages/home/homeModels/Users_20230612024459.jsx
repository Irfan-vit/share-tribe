import useGetUsers from '../../../backend/queryHooks/user/useGetUsers'

const Users = () => {
  const { getUsersQuery } = useGetUsers()
  return (
    <>
      <div>
        {getUsersQuery?.data?.map((user) => (
          <div key={user._id}>
            <div>
              <img src="https://unsplash.com/photos/rDEOVtE7vOs" alt="" />
            </div>
            <div>
                <p></p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Users
