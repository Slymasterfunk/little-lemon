import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router'
import logo from '../assets/logo.svg'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  const menuHandler = () => {
    setShowMenu((current) => !current)
  }

  const location = useLocation()

  useEffect(() => {
    const sectionId = location.hash.replace('#', '') // Extract the section ID from the hash
    if (sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }) // Scroll to the element smoothly
      }
    }
  }, [location])

  return (
    <nav>
      <NavLink to='/'>
        <img src={logo} alt='logo' />
      </NavLink>
      <div className={showMenu ? 'mobile-menu show' : 'mobile-menu'}>
        <ul>
          <li>
            <NavLink to='/' onClick={menuHandler}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/#about' onClick={menuHandler}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/#specials' onClick={menuHandler}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/ReservePage' onClick={menuHandler}>
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to='' onClick={menuHandler}>
              Order Online
            </NavLink>
          </li>
          <li>
            <NavLink to='' onClick={menuHandler}>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className='navbar-desktop'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/#about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/#specials'>Menu</NavLink>
        </li>
        <li>
          <NavLink to='/ReservePage'>Reservations</NavLink>
        </li>
        <li>
          <NavLink to=''>Order Online</NavLink>
        </li>
        <li>
          <NavLink to=''>Login</NavLink>
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
