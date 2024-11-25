import PropTypes from 'prop-types'
import delivery from '../assets/delivery.svg'

const Card = ({ menu }) => {
  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img src={menu.image} alt={menu.title} />
        </div>
        <div className='card-info'>
          <div className='card-heading'>
            <h1>{menu.title}</h1>
            <h2>${menu.price}</h2>
          </div>
          <div className='card-description'>
            <p>{menu.description}</p>
          </div>
          <div className='card-delivery'>
            <h3>Order a delivery</h3>
            <img src={delivery} />
          </div>
        </div>
      </div>
    </>
  )
}

Card.propTypes = {
  menu: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default Card
