import about1 from '../assets/restaurant.jpg'
import about2 from '../assets/about2.jpg'

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='left'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div className='right'>
          <img src={about1} alt='resturant' />
          <img src={about2} alt='mario and adrian' />
        </div>
      </div>
    </section>
  )
}

export default About
