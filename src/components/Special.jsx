import '../assets/styles/Special.css';
import  dishIcon from '../assets/icons/Dish icon.svg';

const Special = (props) => {
  return (
    <aside className='special-card'>
      <img className='special-img' src={props.dish.img} alt={props.dish.name} />
      <div className='name-price'>
        <h3 className='markazi'>{props.dish.name}</h3>
        <span>${props.dish.price}</span>
      </div>
      <p>{props.dish.description}</p>
      <a className='bell-container' href='./order'>
        Order a delivery
        <img className='bell-icon' src={dishIcon} alt='dish icon' />
      </a>
    </aside>
  );
};

export default Special;