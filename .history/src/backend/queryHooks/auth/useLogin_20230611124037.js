import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useAuth } from '../../../context/AuthContext'
const useLogin = () => {
  const {}
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
  return { loginMutation }
}

export default useLogin
