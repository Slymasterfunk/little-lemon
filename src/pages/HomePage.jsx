import Hero from '../components/Hero'
import Specials from '../components/Specials'
import Reviews from '../components/Reviews'
import About from '../components/About'

const HomePage = () => {
  return (
    <div id='homePage'>
      <Hero />
      <Specials />
      <Reviews />
      <About />
    </div>
  )
}

export default HomePage
