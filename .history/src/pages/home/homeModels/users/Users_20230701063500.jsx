import './users.css'
import useGetUsers from '../../../../backend/queryHooks/user/useGetUsers'
import useMutateToggleFollow from '../../../../backend/queryHooks/follow/useMutateToggleFollow'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

const Users = () => {
  const data = JSON.parse(localStorage.getItem('authData'))
  const [suggestedUsers, setSuggestedUsers] = useState('')
  const { getUserQuery } = useGetUsers('c32e8a58-6e47-4dfb-83ce-23d9792ffbac')
  const queryclient = useQueryClient()
  const searchUsers = queryclient
    .getQueryData(['getUsers'])
    ?.filter(
      (user) =>
        user.username.includes(suggestedUsers) &&
        user.username !== data.user.username,
    )
  const {
    toggleFollowMutation,
    toggleUnfollowMutation,
  } = useMutateToggleFollow()
  console.log(toggleUnfollowMutation?.data)

  return (
    <>
      <div className="users-container">
        <div className="search-users">
          <input
            type="text"
            onChange={(e) => {
              setSuggestedUsers(e.target.value)
            }}
          />
        </div>
        {searchUsers?.map((user) => (
          <div key={user._id} className="user">
            <div className="image-user">
              <img src={user.avatar} alt="" />
            </div>
            <div className="about-user">
              <p>{user.username}</p>
              <button
                onClick={() => {
                  toggleFollowMutation.mutate(user._id)
                }}
              >
                follow
              </button>
              {console.log(user.following, 'following')}
              {/* <button
                onClick={() => {
                  toggleUnfollowMutation.mutate(user._id)
                }}
              >
                Unfollow
              </button> */}
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
