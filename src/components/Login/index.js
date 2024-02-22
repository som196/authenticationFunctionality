import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const username = 'rahul'
  const password = 'rahul@2021'
  const url = 'https://apis.ccbp.in/login'

  const onSubmitSuccess = jwtTkoken => {
    const {history} = props

    Cookies.set('jwt_token', jwtTkoken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  const loginButton = async () => {
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1 className="login-para">Please Login</h1>
      <button type="button" onClick={loginButton}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
