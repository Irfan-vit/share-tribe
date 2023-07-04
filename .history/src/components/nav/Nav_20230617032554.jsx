import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import './nav.css'

const Nav = () => {
  const [suggestedUsers, setSuggestedUsers] = useState('')
  const [open, setOpen] = useState(false)
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
          <li>home</li>
          <li>explore</li>
          <li onClick={onOpenModal}>search</li>
          <li>bookmarks</li>
        </ul>
      </nav>
      <Modal open={open} onClose={onCloseModal}>
        <h2>Simple centered modal</h2>
        <input
          type="text"
          onChange={(e) => {
            setSuggestedUsers(e.target.value)
          }}
        />
      </Modal>
    </>
  )
}
export default Nav
