const Signup = () => {
  return (
    <>
      <div>
        <form>
          <label>
            <p>Username</p>
            <input type="text" name='userName'/>
          </label>
          <label>
            <p>Firstname</p>
            <input type="text" name='firstName'/>
          </label>
          <label>
            <p>Lastname</p>
            <input type="text" name='lastNmae'/>
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
