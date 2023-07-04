import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
const useSignup = () => {
  const signupApi = async ({ username, password, firstName, lastName }) => {
    const res = await axios.post(`/api/auth/login`, {
      username,
      password,
      firstName,
      lastName,
    })
    console.log(res.data)
    return res.data
  }
  const signupMutation = useMutation(signupApi)
  signupMutation.isSuccess
    ? localStorage.setItem(
        'authData',
        JSON.stringify({
          token: signupMutation.data?.encodedToken,
          user: signupMutation.data?.createdUser,
        }),
      )
    : null
  return { signupMutation }
}

export default useSignup
