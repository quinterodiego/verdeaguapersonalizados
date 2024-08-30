import { Link } from "react-router-dom"
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <img src={logo} alt="logo vap" height={177} width={177} />
      </Link>
      <div>
        {/* navbar desktop */}
      </div>
    </header>
  )
}

export default Header