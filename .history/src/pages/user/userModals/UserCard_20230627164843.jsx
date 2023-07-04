import { useEffect, useState } from 'react'
import './userCard.css'
import { Modal } from 'react-responsive-modal'
import useMutateUserData from '../../../backend/queryHooks/user/useMutateUserData'
const UserCard = () => {
  const [openEditUser, setOpenEditUser] = useState(false)
  const [editUserData, setEditUserData] = useState(null)
  const [avatarSrc, setAvatarSrc] = useState(
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  )
  const { userDataMutation } = useMutateUserData()
  const { user } = JSON.parse(localStorage.getItem('authData'))
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('authData'))
    data.user.avatar = avatarSrc
    localStorage.setItem('authData', JSON.stringify(data))
  }, [avatarSrc])
  const [userProfileData, setUserProfileData] = useState({
    about: 'i am a web developer',
    link: 'https://github.com/',
  })
  return (
    <>
      <div className="user-card-container">
        <div className="user-card-image-container">
          <img src={user.avatar} alt="" />
          <div>
            <h1>{user.username}</h1>
          </div>
        </div>
        <div>
          <p>{userProfileData.about}</p>
          <a href={userProfileData.link}>{userProfileData.link}</a>
        </div>
        <button
          className="edit-user-card"
          onClick={() => {
            setOpenEditUser(true)
          }}
        >
          edit
        </button>
      </div>
      <Modal open={openEditUser} onClose={() => setOpenEditUser(false)} center>
        <div className="user-card-container">
          <div className="user-card-image-container">
            <img className="edit-image" src={avatarSrc} alt="" />
            <button
              onClick={() => {
                console.log('click')
              }}
            >
              edit
            </button>
          </div>
          <div className="avatars">
            <div className="edit-avatars">
              {['a', 'a', 'a', 'a', 'a', 'a'].map((image, id) => (
                <img
                  key={id}
                  className="edit-image"
                  src={`https://picsum.photos/200?random=${id}`}
                  alt=""
                  onClick={() => {
                    setAvatarSrc(`https://picsum.photos/200?random=${id}`)
                    setEditUserData({
                      ...editUserData,
                      avatar: `https://picsum.photos/200?random=${id}`,
                    })
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <form action="">
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
        <button>save</button>
      </Modal>
    </>
  )
}
export default UserCard
