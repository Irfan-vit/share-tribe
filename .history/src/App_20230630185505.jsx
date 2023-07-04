import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import useGetUsers from './backend/queryHooks/user/useGetUsers'
import useLogin from './backend/queryHooks/auth/useLogin'
import useSignup from './backend/queryHooks/auth/useSignup'
import useMutateUserData from './backend/queryHooks/user/useMutateUserData'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import Bookmarks from './pages/bookmarks/BookMarks'
import User from './pages/user/User'
import Explore from './pages/explore/Explore'

function App() {
  // const { getUsersQuery } = useGetUsers()
  // const { getUserQuery } = useGetUsers('a32e8a58-6e47-4dfb-83ce-23d9792ffbaa')
  // const { loginMutation } = useLogin()
  // const { signupMutation } = useSignup()
  // const { userDataMutation } = useMutateUserData()
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/explore' element={<Explore/}
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </>
  )
}

export default App
