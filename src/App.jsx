import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import Home from './pages/home/Home'
import Bkms from './pages/bookmarks/Bkms'
import User from './pages/user/User'
import Explore from './pages/explore/Explore'
import RequiresAuth from './components/RequiresAuth'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequiresAuth>
              <Explore />
            </RequiresAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequiresAuth>
              <Bkms />
            </RequiresAuth>
          }
        />
        <Route
          path="/user/:userId"
          element={
            <RequiresAuth>
              <User />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />\
      </Routes>
    </>
  )
}

export default App
