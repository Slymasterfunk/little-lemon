import ReserveForm from '../components/ReserveForm'
import restuarant from '../assets/restaurant.jpg'

const ReservePage = () => {
  return (
    <div id='reservePage'>
      <div className='reserveHero'>
        <div className='container'>
          <h1>Let us help plan that special moment</h1>
          <div className='img-container'>
            <img src={restuarant} />
          </div>
        </div>
      </div>
      <div className='container'>
        <ReserveForm />
      </div>
    </div>
  )
}

export default ReservePage
