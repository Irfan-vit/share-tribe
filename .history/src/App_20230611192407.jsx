import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import useGetUsers from './backend/queryHooks/user/useGetUsers'
import useLogin from './backend/queryHooks/auth/useLogin'
import useSignup from './backend/queryHooks/auth/useSignup'
import useMutateUserData from './backend/queryHooks/user/useMutateUserData'

function App() {
  const [count, setCount] = useState(0)
  const { getUsersQuery } = useGetUsers()
  // const { getUserQuery } = useGetUsers('a32e8a58-6e47-4dfb-83ce-23d9792ffbaa')
  // const { loginMutation } = useLogin()
  const { signupMutation } = useSignup()
  const { userDataMutation } = useMutateUserData()
  console.log(getUsersQuery?.data)
  return (
    <>
    </>
  )
}

export default App
