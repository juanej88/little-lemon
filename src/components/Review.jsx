import '../assets/styles/Review.css';
import star from '../assets/icons/star.jpg';

const Review = (props) => {
  const getStars = () => {
    const stars = [];
    for(let i = 0; i < 5; i++) {
      stars.push(<img key={i + 10} className='star' src={star} alt='star' />);
    };
    return stars;
  };

  return (
    <aside className='review'>
      <div>
        {getStars()}
      </div>
      <div className='profile-container'>
        {<img className='profileImg' src={props.user.picture} alt={props.user.name} />}
        <h3>{props.user.name}<span>{props.user.username}</span></h3>
      </div>
      <p>{props.user.review}</p>
    </aside>
  );
};

export default Review;