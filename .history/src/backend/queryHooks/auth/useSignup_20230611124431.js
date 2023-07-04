import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'
import { useEffect } from 'react'
const useSignup = () => {
  const { authData,setAuthData } = useAuth()
  const signupApi = async ({ username, password, firstName, lastName }) => {
    const res = await axios.post(`/api/auth/login`, {
      username,
      password,
      firstName,
      lastName,
    })
    return res.data
  }
  const signupMutation = useMutation(signupApi)
  signupMutation.isSuccess
    ? localStorage.setItem(
        'authData',
        JSON.stringify({
          token: signupMutation.data?.encodedToken,
          user: signupMutation.data?.createdUser,
        }),
      )
    : null
  useEffect(() => {
    setAuthData({
      ...JSON.parse(localStorage.getItem('authData')),
    })
  }, [authData])
  return { signupMutation }
}

export default useSignup
