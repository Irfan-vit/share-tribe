import useGetUsers from '../../../backend/queryHooks/user/useGetUsers'

const Users = () => {
  const { getUsersQuery } = useGetUsers()
  return <>{getUsersQuery.data.map(user => (
    <div key=></div>
  ))}</>
}

export default Users
