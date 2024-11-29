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
          <div>
            <label htmlFor='reservation-name'>Name: </label>
            <input
              id='reservation-name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              required
            />
          </div>
          <div>
            <label htmlFor='reservation-date'>Choose Date:</label>
            <input
              id='reservation-date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type='date'
              required
            />
          </div>
          <div>
            <label htmlFor='reservation-time'>Choose Time:</label>
            <select
              id='reservation-time'
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value=''>Select a Time</option>
              {availableTimes.map((availableTimes) => {
                return <option key={availableTimes}>{availableTimes}</option>
              })}
            </select>
          </div>
          <div>
            <label htmlFor='reservation-guests'>Number of Guests:</label>
            <input
              id='reservation-guests'
              min='1'
              value={guests}
              onChange={(e) => {
                setGuests(e.target.value)
              }}
              type={'number'}
              placeholder={0}
              max={10}
              required
            ></input>
          </div>
          <div>
            <label htmlFor='reservation-occasion'>Occasion:</label>
            <select
              id='reservation-occasion'
              key={occasion}
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value=''>Select an Option</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div className='btnReceive'>
            <input
              aria-label='On Click'
              type={'submit'}
              value={'Make Your Reservation'}
            ></input>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default ReserveForm
