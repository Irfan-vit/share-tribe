import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
const Modal = ({ children }) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    modalRoot.appendChild(elRef.current)

    return ()=> modalRoot.rem
  }, [])

  return createPortal(children)
}
export default Modal
