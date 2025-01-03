import about1 from '../assets/about_img.png'

const About = () => {
  return (
    <section className='about' id='about'>
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
        </div>
      </div>
    </section>
  )
}

export default About
