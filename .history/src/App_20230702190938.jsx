import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import User from './pages/user/User'
import Explore from './pages/explore/Explore'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </>
  )
}

export default App
