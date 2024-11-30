import { useState } from 'react'
import { useNavigate } from 'react-router'

const ReserveForm = () => {
  const [name, setName] = useState('')
  const [occasion, setOccasion] = useState('')
  const [guests, setGuests] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const availableTimes = [
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM'
  ]

  const navigate = useNavigate()

  const handleSumbit = (e) => {
    e.preventDefault()

    navigate('/ConfirmationPage', {
      state: {
        name,
        occasion,
        guests,
        date,
        time
      }
    })
  }

  return (
    <div className='form-reserve'>
      <form onSubmit={handleSumbit}>
        <fieldset className='formField'>
          <div className='form-item'>
            <label htmlFor='reservation-name'></label>
            <input
              id='reservation-name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='Name'
              required
            />
          </div>
          <div className='form-item'>
            <label htmlFor='reservation-date'></label>
            <input
              id='reservation-date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type='date'
              required
            />
          </div>
          <div className='form-item'>
            <label htmlFor='reservation-time'></label>
            <select
              id='reservation-time'
              value={time}
              type='time'
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option className='placeholder' value=''>
                Select a Time
              </option>
              {availableTimes.map((availableTimes) => {
                return <option key={availableTimes}>{availableTimes}</option>
              })}
            </select>
          </div>
          <div className='form-item'>
            <label htmlFor='reservation-guests'></label>
            <input
              id='reservation-guests'
              min='1'
              value={guests}
              onChange={(e) => {
                setGuests(e.target.value)
              }}
              type='number'
              placeholder='Number of Guests'
              max={10}
              required
            ></input>
          </div>
          <div className='form-item'>
            <label htmlFor='reservation-occasion'></label>
            <select
              id='reservation-occasion'
              key={occasion}
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value=''>Occasion?</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div className='btn-container'>
            <input
              className='btn'
              aria-label='On Click'
              type='submit'
              value={'Submit Reservation'}
            ></input>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ReserveForm
