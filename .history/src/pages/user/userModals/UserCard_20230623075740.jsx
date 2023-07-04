import { useState } from 'react'
import './userCard.css'
import { Modal } from 'react-responsive-modal'
const UserCard = () => {
  const [openEditUser, setOpenEditUser] = useState(false)
  const [openeditavatar, setOpenEditAvatar] = useState(false)
  const { user } = JSON.parse(localStorage.getItem('authData'))
  const [userProfileData, setUserProfileData] = useState({
    about: 'i am a web developer',
    link: 'https://github.com/',
  })
  console.log(user)
  return (
    <>
      <div className="user-card-container">
        <div className="user-card-image-container">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
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
            <img
              className="edit-image"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              onClick={() => {
                setOpenEditAvatar(true)
              }}
            />
            <span>edit</span>
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
      </Modal>
      <Modal
        open={openeditavatar}
        onClose={() => setOpenEditAvatar(false)}
        center
      >
        <div className="user-card-image-container">
          {['a', 'a', 'a', 'a', 'a', 'a'].map((image, id) => (
            <img
              key={id}
              className="edit-image"
              src="https://picsum.photos/200/300?random=1"
              alt=""
              onClick={() => {
                setOpenEditAvatar(true)
              }}
            />
          ))}
        </div>
      </Modal>
    </>
  )
}
export default UserCard
