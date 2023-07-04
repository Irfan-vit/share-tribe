import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, wrapperId }) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    const modalRoot = document.getElementById(wrapperId)
    modalRoot.appendChild(elRef.current)
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  return createPortal(children, elRef.current)
}

export default Modal
