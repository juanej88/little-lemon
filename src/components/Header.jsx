import '../assets/styles/Header.css';
import headerImg from '../assets/icons/restauranfood.jpg';

const Header = () => {
  return (
    <header>
      <article>
        <h1 className='markazi'>Little Lemon</h1>
        <span className='markazi'>Chicago</span>
        <p>Welcome to Little Lemon, a family-owned Mediterranean restaurant where we blend tradition with innovation to create unforgettable dining experiences.</p>
        <a className='btn' role='button' href='./reservations'>Reserve a Table</a>
      </article>
      <aside>
        <img className='header-img' src={headerImg} alt='4 panini' />
      </aside>
    </header>
  );
};

export default Header;
