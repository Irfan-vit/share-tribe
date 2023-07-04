import useGetUsers from '../../../backend/queryHooks/user/useGetUsers'

const Users = () => {
  const { getUsersQuery } = useGetUsers()
  return <>{getUsersQuery.data.map(user => (
    <div key={user._id}><p>{}</p></div>
  ))}</>
}

export default Users
