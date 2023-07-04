import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
const useLogin = () => {
  const loginApi = async ({ email, password }) => {
    console.log()
    const res = await axios.post(`/api/auth/login`, { email, password })
    return res.data
  }
  const loginMutation = useMutation(loginApi)
  return { loginMutation }
}

export default useLogin
