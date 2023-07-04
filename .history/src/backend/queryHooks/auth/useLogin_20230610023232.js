import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
const useLogin = () => {
  const loginApi = async ({ username, password }) => {
    console.log(username, password, 'inside')
    const res = await axios.post(`/api/auth/login`, { username, password })
    return res.data
  }
  const loginMutation = useMutation(loginApi)
  loginMutation.isSuccess
    ? localStorage.setItem(
        'loginData',
        JSON.stringify({
          token: loginMutation.data?.encodedToken,
          user: loginMutation.data?.foundUser,
        }),
      )
    : null
  return { loginMutation }
}

export default useLogin
