import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import PostCompose from '../../pages/home/homeModels/PostCompose/PostCompose'
import './nav.css'

const Nav = () => {
  const { user } = JSON.parse(localStorage.getItem('authData'))
  const [suggestedUsers, setSuggestedUsers] = useState('')
  const [open, setOpen] = useState(false)
  const [openPost, setOpenPost] = useState(false)
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  const queryclient = useQueryClient()
  const searchUsers = queryclient
    .getQueryData(['getUsers'])
    ?.filter((user) => user.username.includes(suggestedUsers))
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span className="nav-icons">
                <svg viewBox="0 0 24 24">
                  <g>
                    <path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path>
                  </g>
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <span className="material-symbols-outlined nav-icons">
                explore
              </span>
            </Link>
          </li>
          <li onClick={onOpenModal}>
            <Link>
              <span className="nav-icons">
                <svg viewBox="0 0 24 24">
                  <g>
                    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                  </g>
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/bookmarks">
              <span className="nav-icons">
                <svg viewBox="0 0 24 24">
                  <g>
                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                  </g>
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link to={`/user/${user._id}`}>
              <span className="nav-icons">
                <svg viewBox="0 0 24 24">
                  <g>
                    <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                  </g>
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpenPost(true)}>
              <span className="material-symbols-outlined nav-icons">
                post_add
              </span>
            </Link>
          </li>
        </ul>
        <div className="mobile-post">
          <button onClick={() => setOpenPost(true)}>+</button>
        </div>
      </nav>
      <Modal open={open} onClose={onCloseModal}>
        <h2>Search</h2>
        <input
          className="search-users"
          type="text"
          onChange={(e) => {
            setSuggestedUsers(e.target.value)
          }}
        />
        {searchUsers?.map((user) => (
          <div key={user._id} className="user">
            <div className="image-user">
              <img src={user.avatar} alt="" />
            </div>
            <div className="about-user">
              <p>{user.username}</p>
              {/* <button>follow</button> */}
            </div>
          </div>
        ))}
      </Modal>
      <Modal open={openPost} onClose={() => setOpenPost(false)} center>
        <PostCompose close={setOpenPost} />
      </Modal>
    </>
  )
}
export default Nav
