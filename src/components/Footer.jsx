import { Link } from 'react-router'
import logo from '../assets/logo_white.svg'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='img-container'>
          <img src={logo} alt='logo' />
        </div>
        <div className='footer-contact'>
          <h3>Reach out to us</h3>
          <div className='address'>
            <p>Little Lemon Resturant</p>
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
          </div>
          <div className='email'>
            <a href='mailto:info@littlelemon.com'>info@littlelemon.com</a>
          </div>
          <div className='phone'>
            <a href='tel:123-456-7890'>(123) 456-7890</a>
          </div>
        </div>
        <div className='footer-about'>
          <h3>Get to know us</h3>
          <ul>
            <li>
              <Link to='/#about'>About</Link>
            </li>
            <li>
              <a href=''>Careers</a>
            </li>
            <li>
              <a href=''>Press Release</a>
            </li>
            <li>
              <a href=''>Exclusive Recipes</a>
            </li>
            <li>
              <a href=''>Our Kitchen</a>
            </li>
          </ul>
        </div>
        <div className='footer-social'>
          <h3>Connect with us</h3>
          <ul>
            <li>
              <a href='https://www.facebook.com' target='_blank'>
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com' target='_blank'>
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com' target='_blank'>
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
