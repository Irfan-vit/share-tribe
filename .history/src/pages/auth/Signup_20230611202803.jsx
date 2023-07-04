import useLogin from '../../backend/queryHooks/auth/useLogin'
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
            <input type="text" name="userName" ref />
          </label>
          <label>
            <p>Firstname</p>
            <input type="text" name="firstName" ref />
          </label>
          <label>
            <p>Lastname</p>
            <input type="text" name="lastName" ref />
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
