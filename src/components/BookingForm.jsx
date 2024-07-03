const BookingForm = (props) => {
  const getAvailableTimes = props.availableTimes.times.map(time => {
    return <option key={time}>{time}</option>
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(props.details);
  };

  return (
    <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
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

      <label htmlFor='guests'>Number of guests</label>
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
      
      {/* <input type='submit' role='button' value='Make Your Booking' /> */}
      <button className='btn'>Make Your Booking</button>
    </form>
  );
};

export default BookingForm;