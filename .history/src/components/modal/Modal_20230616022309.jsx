import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
const Modal = ({ children }) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(()=>{
    const modalRoot = document.getE
  },[])
}
export default Modal
