const Login = () => {
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <label>
            <p>Username</p>
            <input type="text" name="email" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <button>login</button>
          <button>Guest</button>
        </form>
      </div>
    </>
  )
}
export default Login
