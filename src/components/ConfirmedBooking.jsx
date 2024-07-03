import '../assets/styles/ConfirmedBooking.css';
import headerImg from '../assets/images/restaurant chef B.jpg';

const ConfirmedBooking = (props) => {
  const {date, time, guests, occasion} = props.bookingDetails;
  return (
    <>
      <header>
        <article>
          <h1 className='markazi'>Your booking has been confirmed</h1>
          <span className='markazi'>Thanks for using our booking system</span>
          <p>We cannot wait to see you at Little Lemon.</p>
        </article>
        <aside>
          <img className='header-img' src={headerImg} alt='4 panini' />
        </aside>
      </header>
      <main className='booking-container'>
        <p className='booking-details'>{`Your booking was successfully confirmed on ${date} at ${time} for ${guests} guests. We will make sure that your ${occasion.toLowerCase()} will be unforgettable. See you soon!`}</p>
      </main>
    </>
  );
};

export default ConfirmedBooking;