import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useLogin = () => {
  const signupApi = async ({ email, password }) =>
    await axios.post(`/api/auth/signup`, {
      email,
      password,
    })
}
