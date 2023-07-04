import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { Routes, Route, Link } from 'react-router-dom'
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
  const currentuser = queryclient.getQueryData(['getUser', user._id])
  console.log(queryclient.getQueryData(['getUser', user._id]), 'nav')
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/explore">explore</Link>
          </li>
          <li onClick={onOpenModal}>
            <Link>search</Link>
          </li>
          <li>
            <Link to="/bookmarks">bookmarks</Link>
          </li>
          <li>
            <Link to="/user">user</Link>
          </li>
          <li>
            <Link onClick={() => setOpenPost(true)}>tweet</Link>
          </li>
        </ul>
        <div className="mobile-post">
          <button onClick={() => setOpenPost(true)}>+</button>
        </div>
      </nav>
      <Modal open={open} onClose={onCloseModal}>
        <h2>Search</h2>
        <input
          type="text"
          onChange={(e) => {
            setSuggestedUsers(e.target.value)
          }}
        />
        {searchUsers?.map((user) => (
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
      </Modal>
      <Modal open={openPost} onClose={() => setOpenPost(false)} center>
        <PostCompose close={setOpenPost} />
      </Modal>
    </>
  )
}
export default Nav
