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
  setState,
}) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = createWrapperAndAppendToBody(wrapperId)
  }

  useEffect(() => {
    const modalRoot = document.getElementById(parent)
    modalRoot.appendChild(elRef.current)
    document.addEventListener('mousedown', (e) => {
      if (elRef.current && !elRef.current.contains(e.target)) {
        console.log(modalRoot.contains(e.target))
        setState(false)
      }
    })
    return () => {
      modalRoot.removeChild(elRef.current)
    }
  }, [])

  return createPortal(children, elRef.current)
}

export default Modal
