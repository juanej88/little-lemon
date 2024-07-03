import { fireEvent, render, screen } from '@testing-library/react';
import BookingPage from './components/BookingPage';

describe('Booking Form', () => {
  test('Renders the BookingPage Heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText('Book a Table');
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders the Occasion Label', () => {
    render(<BookingPage />);
    const title = screen.getByLabelText(/Occasion/);
    expect(title).toBeInTheDocument();
  });

  test('Gets the correct initial values for availableTimes', () => {
    render(<BookingPage />);
    
    const time = '17:00';
    const timeOption = screen.getByText(time);

    expect(timeOption).toBeInTheDocument();
  });

  test('Updates the availableTimes when the date input changes', () => {
    const time = '21:00';
    render(<BookingPage />);
    
    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, {target: { value: '2024-07-03' }});

    const timeOption = screen.getByText(time);

    expect(timeOption).toBeInTheDocument();
  });

  test('User is able to submit the form', () => {
    const date = '2024-07-03';
    const time = '17:00';
    const guests = '2';
    const occasion = 'Anniversary';
    const handleSubmit = jest.fn();
    render(<BookingPage onSubmit={handleSubmit} />);

    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, {target: { value: date }});

    const timeInput = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeInput, {target: { value: time }});

    const guestInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestInput, {target: { value: guests }});

    const occasionInput = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionInput, {target: { value: occasion }});

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({date, time, guests, occasion});
  });
});