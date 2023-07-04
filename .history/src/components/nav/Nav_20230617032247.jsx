import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

import './nav.css'
import { useState } from 'react'
const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav>
        <ul>
          <li>home</li>
          <li>explore</li>
          <li>search</li>
          <li>bookmarks</li>
        </ul>
      </nav>
    </>
  )
}
export default Nav
