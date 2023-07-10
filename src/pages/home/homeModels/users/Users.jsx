import './users.css'
import useGetUsers from '../../../../backend/queryHooks/user/useGetUsers'
import useMutateToggleFollow from '../../../../backend/queryHooks/follow/useMutateToggleFollow'
import { useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const Users = () => {
  const data = JSON.parse(localStorage.getItem('authData'))
  // const [suggestedUsers, setSuggestedUsers] = useState('')
  const { getUserQuery } = useGetUsers(data.user._id)
  const queryclient = useQueryClient()
  const searchUsers = queryclient
    .getQueryData(['getUsers'])
    ?.filter((user) => user.username !== getUserQuery?.data?.username)
    ?.filter(
      (eachUser) =>
        !getUserQuery?.data?.following?.find(
          (item) => item.username === eachUser.username,
        ),
    )
  const {
    toggleFollowMutation,
    toggleUnfollowMutation,
  } = useMutateToggleFollow()

  return (
    <>
      <div className="users-container">
        {/* <div className="search-users"> */}
        {/* </div> */}
        {searchUsers?.map((user) => (
          <Link to={`/user/${user._id}`} key={user._id}>
            <div className="user">
              <div className="image-user">
                <img src={user.avatar} alt="" />
              </div>
              <div className="about-user">
                <p>{user.username}</p>
                <button
                  onClick={() => {
                    toggleFollowMutation.mutate(user._id)
                    console.log('click')
                  }}
                >
                  follow
                </button>
                {/* <button
                onClick={() => {
                  toggleUnfollowMutation.mutate(user._id)
                }}
              >
                Unfollow
              </button> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Users
