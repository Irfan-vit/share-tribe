import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
const useLogin = () => {
  const loginApi = async ({ username, password }) => {
    console.log(username, password, 'inside')
    const res = await axios.post(`/api/auth/login`, { username, password })
    console.log(res.data)
    return res.data
  }
  const loginMutation = useMutation(loginApi)
  return { loginMutation }
}

export default useLogin
