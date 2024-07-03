import { useState, useReducer, useEffect } from 'react';
import { fetchAPI } from '../API/API';
import BookingForm from './BookingForm';

const reducer = (state, action) => {
  if(action.type === 'updateTimes') {
    return {...state, times: action.APITimes};
  } else {
    return 'Error';
  }
};

const BookingPage = (props) => {
  const [details, setDetails] = useState({
    date: '',
    time: '17:00',
    guests: 0,
    occasion: ''
  });
  const updateDetails = e => {
    // It needs to get updated with the API
    if(e.target.name === 'date') {
      const APIData = fetchAPI(new Date(e.target.value));
      updateTimes(APIData);
    };

    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  
  const initialTime = {times: ['17:00']};

  const [availableTimes, dispatch] = useReducer(reducer, initialTime);
  const updateTimes = (data) => dispatch({type: 'updateTimes', APITimes: data});

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