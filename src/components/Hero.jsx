import heroImg from '../assets/restauranfood.jpg'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='left'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean resturant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to='/ReservePage' className='btn'>
            Reserve a Table
          </Link>
        </div>
        <div className='right'>
          <img src={heroImg} alt='food on stone' />
        </div>
      </div>
    </section>
  )
}

export default Hero
