import { useEffect, useState } from 'react'
import './userCard.css'
import { Modal } from 'react-responsive-modal'
import useMutateUserData from '../../../backend/queryHooks/user/useMutateUserData'
import useGetUsers from '../../../backend/queryHooks/user/useGetUsers'
const UserCard = () => {
  const [openEditUser, setOpenEditUser] = useState(false)
  const { userDataMutation } = useMutateUserData()
  const { getUserQuery } = useGetUsers()
  const [userProfileData, setUserProfileData] = useState({})
  return (
    <>
      <div className="user-card-container">
        <div className="user-card-image-container">
          <img src={getUserQuery.d.avatar} alt="" />
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
                    setUserProfileData({
                      ...userProfileData,
                      avatar: `https://picsum.photos/200?random=${id}`,
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
        <button>save</button>
      </Modal>
    </>
  )
}
export default UserCard
