import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './userCard.css'
import { Modal } from 'react-responsive-modal'
import useMutateUserData from '../../../backend/queryHooks/user/useMutateUserData'
import useMutateToggleFollow from '../../../backend/queryHooks/follow/useMutateToggleFollow'
import useGetUsers from '../../../backend/queryHooks/user/useGetUsers'
import useGetPosts from '../../../backend/queryHooks/post/useGetPosts'
import Post from '../../../components/post/Post'
import { useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
const UserCard = () => {
  const navigate = useNavigate()
  const queryclient = useQueryClient()
  const { userId } = useParams()
  const { user } = JSON.parse(localStorage.getItem('authData'))
  const ogUser = user
  const { getPostsQuery } = useGetPosts()
  const [openEditUser, setOpenEditUser] = useState(false)
  const { userDataMutation } = useMutateUserData()
  const { getUserQuery, getUsersQuery } = useGetUsers(userId)
  const {
    toggleFollowMutation,
    toggleUnfollowMutation,
  } = useMutateToggleFollow()
  const [userProfileData, setUserProfileData] = useState({})

  const searchUsers = queryclient
    .getQueryData(['getUsers'])
    ?.filter((user) => user.username !== ogUser.username)
    ?.some((eachUser) => {
      console.log(eachUser.username)
      !getUserQuery?.data?.following?.forEach((item) => {
        console.log(item.username, 'as')
        return item.username === eachUser.username
      })
    })
  console.log(searchUsers, 'su')
  console.log(
    queryclient
      .getQueryData(['getUsers'])
      ?.filter((user) => user.username !== getUserQuery?.data?.username),
    'final',
  )
  const postsOfFollowingUsers = getPostsQuery?.data?.filter(
    (post) => getUserQuery.data?.username === post.username,
  )

  console.log(postsOfFollowingUsers, 'pdf')
  return (
    <>
      <div className="user-card-container">
        <div className="user-card-image-container">
          <img src={getUserQuery?.data?.avatar} alt="" />
          <div>
            <h1>{getUserQuery?.data?.username}</h1>
          </div>
        </div>
        <div>
          <p>{getUserQuery?.data?.about}</p>
          <a href={getUserQuery?.data?.link}>{getUserQuery?.data?.link}</a>
          {getUserQuery.data?.username ===
          user.username ? null : !searchUsers ? (
            <button
              onClick={() => {
                toggleFollowMutation.mutate(getUserQuery?.data?._id)
                console.log('click')
              }}
            >
              follow
            </button>
          ) : (
            <button
              onClick={() => {
                toggleUnfollowMutation.mutate(getUserQuery?.data?._id)
              }}
            >
              Unfollow
            </button>
          )}

          {userId === user._id ? (
            <button
              onClick={() => {
                localStorage.clear()
                navigate('/login')
              }}
            >
              Log out
            </button>
          ) : null}
          {/*  */}
        </div>
        {userId === user._id ? (
          <span
            onClick={() => {
              setOpenEditUser(true)
            }}
            className="material-symbols-outlined edit-user-card"
          >
            edit
          </span>
        ) : null}
      </div>
      <div>
        <h1>User Posts</h1>
        {postsOfFollowingUsers?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
      <Modal open={openEditUser} onClose={() => setOpenEditUser(false)} center>
        <div className="user-card-container">
          <div className="avatars">
            <div className="edit-avatars">
              {['a', 'a', 'a', 'a', 'a', 'a'].map((image, id) => (
                <img
                  key={id}
                  className="edit-image"
                  src={`https://picsum.photos/200/100?random=${id}`}
                  alt=""
                  onClick={() => {
                    setUserProfileData({
                      ...userProfileData,
                      avatar: `https://picsum.photos/200/100?random=${id}`,
                    })
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <form action="" className="form">
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setUserProfileData({
                ...userProfileData,
                about: e.target.value,
              })
            }}
          />
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setUserProfileData({
                ...userProfileData,
                link: e.target.value,
              })
            }}
          />
        </form>
        <button
          onClick={() => {
            userDataMutation.mutate({
              ...userProfileData,
            })
            getUsersQuery.refetch()
          }}
        >
          save
        </button>
      </Modal>
    </>
  )
}
export default UserCard
