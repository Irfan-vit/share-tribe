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
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </>
  )
}
export default Nav
