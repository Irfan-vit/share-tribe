import { useState } from 'react'

import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import './nav.css'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
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
    </>
  )
}
export default Nav
