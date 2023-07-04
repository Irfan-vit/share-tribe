import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
const useLogin = () => {
  const loginApi = async ({ username, password }) => {
    console.log(username, password, 'inside')
    const res = await axios.post(`/api/auth/login`, { username, password })
    return res.data
  }
  const setLocalStorageCred = () => {
    localStorage.setItem(
      'token',
      JSON.stringify(loginMutation.data.encodedToken),
      'userDetails',
      JSON.stringify(loginMutation.data.foundUser),
    )
  }
  const loginMutation = useMutation(loginApi)
  loginMutation.isSuccess
    ? localStorage.setItem(
        'loginData',
        JSON.stringify({
          token: loginMutation.encodedToken,
          user: loginMutation.foundUser,
        }),
      )
    : null
  return { loginMutation }
}

export default useLogin
