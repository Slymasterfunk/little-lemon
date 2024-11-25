import { useState } from 'react'
import logo from '../assets/logo.svg'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  const menuHandler = () => {
    setShowMenu((current) => !current)
  }

  return (
    <nav>
      <a href='/'>
        <img src={logo} alt='logo' />
      </a>
      <div className={showMenu ? 'mobile-menu show' : 'mobile-menu'}>
        <ul>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='#menu'>Menu</a>
          </li>
          <li>
            <a href='#reservations'>Reservations</a>
          </li>
          <li>
            <a href='#order'>Order Online</a>
          </li>
          <li>
            <a href='#login'>Login</a>
          </li>
        </ul>
      </div>
      <ul className='navbar-desktop'>
        <li>
          <a href='/home'>Home</a>
        </li>
        <li>
          <a href='#menu'>Menu</a>
        </li>
        <li>
          <a href='#reservations'>Reservations</a>
        </li>
        <li>
          <a href='#order'>Order Online</a>
        </li>
        <li>
          <a href='#login'>Login</a>
        </li>
      </ul>

      <button
        id='menu-btn'
        className={showMenu ? 'hamburger open' : 'hamburger'}
        onClick={menuHandler}
        type='button'
      >
        <span className='hamburger-top'></span>
        <span className='hamburger-middle'></span>
        <span className='hamburger-bottom'></span>
      </button>
    </nav>
  )
}

export default Nav
