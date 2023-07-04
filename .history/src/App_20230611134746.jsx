import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useGetUsers from './backend/queryHooks/user/useGetUsers'
import useLogin from './backend/queryHooks/auth/useLogin'
import useSignup from './backend/queryHooks/auth/useSignup'
import useMu
import { useAuth } from './context/AuthContext'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  // const { getUsersQuery } = useGetUsers()
  // const { getUserQuery } = useGetUsers('a32e8a58-6e47-4dfb-83ce-23d9792ffbaa')
  // const { loginMutation } = useLogin()
  const { signupMutation } = useSignup()
  const { authData } = useAuth()
  console.log(authData)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={() => {
            signupMutation.mutate({
              username: 'adarshbalika',
              password: 'adarshBalika123',
              firstName: 'adarsh',
              lastName: 'balika',
            })
          }}
        >
          mutate
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
