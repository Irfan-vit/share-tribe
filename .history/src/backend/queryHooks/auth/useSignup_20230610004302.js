import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useSignup = () => {
  const signup = async ({ email, password }) =>
    await axios.post(`/api/auth/signup`, {
      email,
      password,
    })
}
