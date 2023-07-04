import './users.css'
import useGetUsers from '../../../../backend/queryHooks/user/useGetUsers'
import { useQueryClient } from '@tanstack/react-query'

const Users = () => {
  const []
  const { getUsersQuery } = useGetUsers()
  const queryclient = useQueryClient()
  const searchUsers = queryclient.getQueryData(['getUsers'])
  console.log(searchUsers)
  return (
    <>
      <div className="users-container">
        {getUsersQuery?.data?.map((user) => (
          <div key={user._id} className="user">
            <div className="image-user">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
            <div className="about-user">
              <p>{user.username}</p>
              <button>follow</button>
            </div>
          </div>
        ))}
        <div>
          <span>Show more</span>
        </div>
      </div>
    </>
  )
}

export default Users
