import { useLocation, Link } from 'react-router'
import moment from 'moment'

const ConfirmationPage = () => {
  const location = useLocation()
  const { name, occasion, guests, date, time } = location.state || {}

  return (
    <div id='confirmationPage'>
      <div className='container'>
        <h1>Happy {occasion}</h1>
        <span>🎉</span>
        <div className='reserve-info'>
          <div className='reserve-info-item'>
            <small>Reservation for</small>
            <p>{name}</p>
          </div>
          <div className='reserve-info-item'>
            <small>Number of Guests</small>
            <p>{guests}</p>
          </div>
          <div className='resrve-info-item'>
            <small>Date and Time</small>
            <p>
              {moment(date).format('DD MMM YYYY')} @ {time}
            </p>
          </div>
        </div>
        <div className='reserve-menu'>
          <Link className='btn btn-menu' to='/#specials'>
            checkout our menu
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationPage
