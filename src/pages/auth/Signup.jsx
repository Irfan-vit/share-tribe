import { useLocation, useNavigate } from 'react-router-dom'
import useSignup from '../../backend/queryHooks/auth/useSignup'
import { Link } from 'react-router-dom'
const Signup = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { signupMutation } = useSignup()
  signupMutation.isSuccess
    ? navigate(`${location?.state?.from?.pathname || '/'}`, { replace: true })
    : null
  return (
    <>
      <div className="auth">
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
            signupMutation.mutate(userData)
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
            <input type="password" name="password" required />
          </label>
          <button>sign up</button>
        </form>
        <Link to="/login">new user ? please sign up</Link>
      </div>
    </>
  )
}
export default Signup
