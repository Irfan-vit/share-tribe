const Login = () => {
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <label htmlFor="">
            <p>Username</p>
            <input type="text" />
          </label>
          <label htmlFor="">
            <p>Password</p>
            <input type="password" />
          </label>
          <button>login</button>
          <button>Gu</button>
        </form>
      </div>
    </>
  )
}
export default Login
