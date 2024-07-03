import { useState, useReducer, useEffect } from 'react';
import BookingForm from './BookingForm';

const reducer = (state, action) => {
  console.log(state, action);
  if(action.type === 'updateTimes') {
    return {...state, times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
  } else {
    return 'Error';
  }
};

const BookingPage = (props) => {
  const [details, setDetails] = useState({
    date: '',
    time: '',
    guests: 0,
    occasion: ''
  });
  const updateDetails = e => {
    // It needs to get updated with the API
    if(e.target.name === 'date') updateTimes();

    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  
  const initialiseTimes = {times: ['17:00']};
  const [availableTimes, dispatch] = useReducer(reducer, initialiseTimes);
  const updateTimes = () => dispatch({type: 'updateTimes'});
  
  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <>
      <header>
        <h1>Book a Table</h1>
      </header>
      <main>
        <BookingForm details={details} updateDetails={updateDetails} availableTimes={availableTimes} onSubmit={props.onSubmit} />
      </main>
    </>
  );
};

export default BookingPage;