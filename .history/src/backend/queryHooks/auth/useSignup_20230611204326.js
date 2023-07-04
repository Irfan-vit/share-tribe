import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
const useSignup = () => {
  const signupApi = async ({ username, password, firstName, lastName }) => {
    console.log(username, password, firstName, lastName)
    const res = await axios.post(`/api/auth/signup`, {
      username,
      password,
      firstName,
      lastName,
    })
    return res.data
  }
  const signupMutation = useMutation(signupApi)
  signupMutation.isSuccess
    ? localStorage.setItem(
        'authData',
        JSON.stringify({
          token: signupMutation.data?.encodedToken,
          user: signupMutation.data?.foundUser,
        }),
      )
    : null
  return { signupMutation }
}

export default useSignup
