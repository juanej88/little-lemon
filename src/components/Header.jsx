import '../assets/styles/Header.css';
import headerImg from '../assets/icons/restauranfood.jpg';

const Header = () => {
  return (
    <header>
      <article>
        <h1 className='markazi'>Little Lemon</h1>
        <span className='markazi'>Chicago</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a className='btn' role='button' href='./reservations'>Reserve a Table</a>
      </article>
      <aside>
        <img className='header-img' src={headerImg} alt='4 panini' />
      </aside>
    </header>
  );
};

export default Header;
