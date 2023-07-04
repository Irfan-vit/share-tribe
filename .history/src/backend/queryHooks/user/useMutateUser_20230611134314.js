import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useMutateUser = () => {
    const mutateUserApi = async ({ username, password, firstName, lastName }) => {
        const res = await axios.post(`/api/auth/login`, {
          username,
          password,
          firstName:'shaka',
          lastName:'laka',
        })
        console.log(res.data)
        return res.data
      }
}

export useMutateUser