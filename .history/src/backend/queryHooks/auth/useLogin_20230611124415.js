import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'
import { useEffect } from 'react'
const useLogin = () => {
  const { authData,setAuthData } = useAuth()
  const loginApi = async ({ username, password }) => {
    const res = await axios.post(`/api/auth/login`, { username, password })
    return res.data
  }
  const loginMutation = useMutation(loginApi)
  loginMutation.isSuccess
    ? localStorage.setItem(
        'authData',
        JSON.stringify({
          token: loginMutation.data?.encodedToken,
          user: loginMutation.data?.foundUser,
        }),
      )
    : null
  useEffect(() => {
    setAuthData({
      ...JSON.parse(localStorage.getItem('authData')),
    })
  }, [])
  return { loginMutation }
}

export default useLogin
