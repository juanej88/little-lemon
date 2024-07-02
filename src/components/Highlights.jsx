import { Link } from 'react-router-dom';
import Special from './Special';
import '../assets/styles/Highlights.css';
import greekSalad from '../assets/icons/greek salad.jpg';
import bruchetta from '../assets/icons/bruchetta.svg';
import lemonDessert from '../assets/icons/lemon dessert.jpg';

const Highlights = () => {
  const dishes = [
    {
      name: 'Greek Salad',
      price: '12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      img: greekSalad,
    },
    {
      name: 'Bruchetta',
      price: '5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      img: bruchetta,
    },
    {
      name: 'Lemon Dessert',
      price: '5.00',
      description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      img: lemonDessert,
    },
  ];

  const getDishes = () => {
    return dishes.map((dish, i) => <Special key={i} dish={dish} />);
  };
  
  return (
    <section id='highlights'>
      <article>
        <h2>This weeks specials!</h2>
        <Link to='/' className='btn'>Online Menu</Link>
      </article>
      {getDishes()}
    </section>
  );
};

export default Highlights;