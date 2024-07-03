import { useEffect, useState } from 'react';
import '../assets/styles/BookingForm.css';

const BookingForm = (props) => {
  const getAvailableTimes = props.availableTimes.times.map(time => {
    return <option key={time}>{time}</option>
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(props.details);
  };

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const {date, time, guests, occasion} = props.details;
    date && time && guests >= 1 && guests <= 10 && occasion ?
    setIsDisabled(false) :
    setIsDisabled(true);
  }, [props.details]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='res-date'>Choose date</label>
      <input 
        type='date' 
        id='res-date' 
        name='date' 
        onChange={props.updateDetails}
        value={props.details.date}
        required
      />
      
      <label htmlFor='res-time'>Choose time</label>
      <select 
        id='res-time' 
        name='time' 
        onChange={props.updateDetails} 
        value={props.details.time}
        required
      >
          {getAvailableTimes}
      </select>

      <label htmlFor='guests' inputMode='numeric'>Number of guests</label>
      <input 
        type='number' 
        placeholder='1' 
        min='1' 
        max='10' 
        id='guests'
        name='guests' 
        onChange={props.updateDetails} 
        value={props.details.guests}
        required
      />

      <label htmlFor='occasion'>Occasion</label>
      <select 
        id='occasion'
        name='occasion' 
        onChange={props.updateDetails} 
        value={props.details.occasion}
        required
      >
          <option></option>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <button className='btn' disabled={isDisabled}>Make Your Booking</button>
    </form>
  );
};

export default BookingForm;