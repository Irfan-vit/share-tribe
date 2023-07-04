import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useSignup = () => {
  const signupApi = async ({ email, password }) =>
    await axios.post(`/api/auth/signup`, {
      email,
      password,
    })
}
