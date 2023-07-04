import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
const useLogin = () => {
  const loginApi = async ({ username, password }) => {
    console.log(username, password, 'inside')
    const res = await axios.post(`/api/auth/login`, { username, password })
    return res.data
  }
  const loginMutation = useMutation(loginApi)
  loginMutation.isSuccess? localStorage.setItem('token', JSON.stringify(response.data.encodedToken))
  return { loginMutation }
}

export default useLogin
