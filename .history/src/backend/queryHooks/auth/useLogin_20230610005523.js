import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
const useLogin = ({ email, password }) => {
  const loginApi = async () => {
    const res = await axios.post(`/api/auth/login`, { email, password })
    return res.data
  }
  const loginMutation = useMutation(loginApi)
}

export { useLogin }
