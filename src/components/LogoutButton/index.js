import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButtonButton = props => {
  const {history} = props
  const logout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <button type="button" className="login-button" onClick={logout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButtonButton)
