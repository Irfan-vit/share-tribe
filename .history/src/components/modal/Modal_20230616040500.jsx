import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function createWrapperAndAppendToBody(wrapperId) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

const Modal = ({ children, wrapperId = 'react-portal-wrapper' }) => {
  const [wrapperElement, setWrapperElement] = useState(null)
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = createWrapperAndAppendToBody(wrapperId)
  }

  useEffect(() => {
    const modalRoot = document.getElementById(wrapperId)
    modalRoot.appendChild(elRef.current)
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  return createPortal(children, elRef.current)
}

export default Modal
