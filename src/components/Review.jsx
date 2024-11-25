import PropTypes from 'prop-types'
import user from '../assets/user.svg'
import stars from '../assets/rating.svg'

const Review = ({ review }) => {
  return (
    <>
      <div className='reviews-card'>
        <div className='reviews-rating'>
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={stars}
              className={`star ${index >= review.rating ? 'fade' : ''}`}
              alt='star'
            />
          ))}
        </div>
        <div className='reviews-info'>
          <img src={user} alt='user' />
          <div className='reviews-info-name'>
            <h3>{review.name}</h3>
            <p>{review.reviews} reviews</p>
          </div>
        </div>
        <div className='reviews-description'>
          <p>
            {[review.message.length] > 50
              ? [review.message.slice(0, 50), '...'].join('')
              : review.message}
          </p>
        </div>
      </div>
    </>
  )
}

Review.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired
}

export default Review
