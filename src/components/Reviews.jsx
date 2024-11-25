import Review from './Review'
import testimonial from '../data/testimonial'

const Reviews = () => {
  return (
    <section className='reviews'>
      <div className='container'>
        <h1>Valuable Customer Reviews</h1>
        <div className='reviews-cards'>
          {testimonial.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
