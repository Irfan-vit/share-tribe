import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

function createWrapperAndAppendToBody(wrapperId) {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)
  return wrapperElement
}

const Modal = ({
  children,
  wrapperId = 'react-portal-wrapper',
  parent = 'modal',
  state,
}) => {
  const [wrapperElement, setWrapperElement] = useState(null)
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = createWrapperAndAppendToBody(wrapperId)
  }

  useEffect(() => {
    console.log(state, 'state')
    const modalRoot = document.getElementById(parent)
    modalRoot.appendChild(elRef.current)
    return () => {
      modalRoot.removeChild(elRef.current)
    }
  }, [])

  return createPortal(children, elRef.current)
}

export default Modal
