const Signup = () => {
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
            loginMutation.mutate(userData)
          }}
        >
          <label>
            <p>Username</p>
            <input type="text" name="userName" />
          </label>
          <label>
            <p>Firstname</p>
            <input type="text" name="firstName" />
          </label>
          <label>
            <p>Lastname</p>
            <input type="text" name="lastName" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
        </form>
      </div>
    </>
  )
}
export default Signup
