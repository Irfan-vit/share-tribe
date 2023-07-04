import useSignup from '../../backend/queryHooks/auth/useSignup'
const Signup = () => {
  const { loginMutation } = useLogin()
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const userData = {
              username: formData?.get('userName'),
              password: formData?.get('password'),
              firstName: formData?.get('firstName'),
              lastName: formData?.get('lastName'),
            }
            console.log(userData)
            loginMutation.mutate(userData)
          }}
        >
          <label>
            <p>Username</p>
            <input type="text" name="userName" required />
          </label>
          <label>
            <p>Firstname</p>
            <input type="text" name="firstName" required />
          </label>
          <label>
            <p>Lastname</p>
            <input type="text" name="lastName" required />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <button>sign up</button>
        </form>
      </div>
    </>
  )
}
export default Signup
