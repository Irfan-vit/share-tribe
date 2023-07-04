import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { Routes, Route, Link } from 'react-router-dom'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import './nav.css'

const Nav = () => {
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
            <Link>tweet</Link>
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
        <h2>Search</h2>
        <textarea name="post" id=""></textarea>
        <div>
          <ul>
            <li>
              <input type="file" id="file-input" />
            </li>

            <li>emoji</li>
          </ul>
          {/* <button
            onClick={() => {
              console.log(filePreview)
              addPostsMutation.mutate({
                file: filePreview,
                content: 'i am a new post',
              })
            }}
          >
            tweet
          </button> */}
        </div>
      </Modal>
      <Modal></Modal>
    </>
  )
}
export default Nav
