import 
const Login = () => {
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
            }
            console.log(userData)
          }}
        >
          <label>
            <p>Username</p>
            <input type="text" name="userName" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" name="password" />
          </label>
          <button>login</button>
          <button>Guest</button>
        </form>
      </div>
    </>
  )
}
export default Login
