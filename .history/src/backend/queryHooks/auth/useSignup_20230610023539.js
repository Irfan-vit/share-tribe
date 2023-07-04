import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
const useSignup = () => {
  const signupApi = async ({ username, password }) => {
    const res = await axios.post(`/api/auth/login`, { username, password })
    return res.data
  }
  const signupMutation = useMutation(signupApi)
  loginMutation.isSuccess
    ? localStorage.setItem(
        'loginData',
        JSON.stringify({
          token: loginMutation.data?.encodedToken,
          user: loginMutation.data?.createdUser,
        }),
      )
    : null
  return { loginMutation }
}

export default useLogin
