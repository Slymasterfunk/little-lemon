import { describe, it, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import ReserveForm from './components/ReserveForm'
import { useNavigate } from 'react-router'

vi.mock('react-router', () => ({
  ...vi.importActual('react-router'),
  useNavigate: vi.fn()
}))

describe('ReserveForm Component', () => {
  const mockNavigate = useNavigate()
  it('renders correctly and handles form submission', () => {
    const { getByLabelText, getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <ReserveForm />
      </MemoryRouter>
    )

    // Check if form elements are rendered
    expect(getByPlaceholderText('Name')).toBeInTheDocument()
    expect(getByLabelText('Choose Date:')).toBeInTheDocument()
    expect(getByLabelText('Choose Time:')).toBeInTheDocument()
    expect(getByLabelText('Number of Guests:')).toBeInTheDocument()
    expect(getByLabelText('Occasion:')).toBeInTheDocument()

    // Simulate user input
    fireEvent.change(getByPlaceholderText('Name'), {
      target: { value: 'John Doe' }
    })
    fireEvent.change(getByLabelText('Choose Date:'), {
      target: { value: '2023-12-31' }
    })
    fireEvent.change(getByLabelText('Choose Time:'), {
      target: { value: '7:00 PM' }
    })
    fireEvent.change(getByLabelText('Number of Guests:'), {
      target: { value: '4' }
    })
    fireEvent.change(getByLabelText('Occasion:'), {
      target: { value: 'Birthday' }
    })

    // Check if form elements have the correct values
    expect(getByPlaceholderText('Name').value).toBe('John Doe')
    expect(getByLabelText('Choose Date:').value).toBe('2023-12-31')
    expect(getByLabelText('Choose Time:').value).toBe('7:00 PM')
    expect(getByLabelText('Number of Guests:').value).toBe('4')
    expect(getByLabelText('Occasion:').value).toBe('Birthday')

    // Simulate form submission
    fireEvent.click(getByText('Make Your Reservation'))

    // Check if navigate function is called with the correct arguments
    expect(mockNavigate).toHaveBeenCalledWith('/ConfirmationPage', {
      state: {
        name: 'John Doe',
        date: '2023-12-31',
        time: '7:00 PM',
        guests: '4',
        occasion: 'Birthday'
      }
    })
  })
})
