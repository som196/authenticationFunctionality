import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="home-link">
      <li>Home</li>
    </Link>
    <Link to="/about" className="about-link">
      <li>About</li>
    </Link>
  </div>
)

export default Header
