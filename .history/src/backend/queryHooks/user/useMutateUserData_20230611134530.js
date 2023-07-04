import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const useMutateUserData = () => {
    const mutateUserApi = async ({ username, password, firstName, lastName }) => {
        const res = await axios.post(`/api/users/edit`, {
          firstName:'shaka',
          lastName:'laka',
        })
        console.log(res.data)
        return res.data
    }
    const userDataMutation = useMutation(mutateUserApi)
}

export useMutateUserData