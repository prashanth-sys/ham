// Write your code here
// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => (
  <div className="header-container">
    <nav className="nav-items">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="krishna"
        className="logo"
      />
      <Popup
        modal
        trigger={
          <button className="button" type="button">
            .
            <GiHamburgerMenu className="icon" />
          </button>
        }
      >
        {close => (
          <>
            <div>
              <Link to="/" onClick={() => close()} className="link">
                {' '}
                <div className="">
                  <AiFillHome />
                  <h1>Home</h1>
                </div>
              </Link>
              <Link to="about" onClick={() => close()} className="link">
                {' '}
                <h1>About</h1>
              </Link>
            </div>
          </>
        )}
      </Popup>
    </nav>
  </div>
)
export default Header
