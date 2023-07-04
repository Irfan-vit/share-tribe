import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useLogin = () => {
  const loginApi = async ({ email, password }) => {
    const await axios.post(`/api/auth/login`, JSON.stringify({ email, password }))
  }
}
