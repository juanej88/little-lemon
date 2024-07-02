import { Link } from 'react-router-dom';
import Links from './Links';
import '../assets/styles/Nav.css';
import logo from '../assets/icons/Logo.svg';
import hamburgerMenu from '../assets/icons/🦆 icon _hamburger menu.svg';

const Nav = () => {
  return (
    <nav>
      <Link to='/' id='logo'>
        <img src={logo} alt='Little Lemon logo' />
      </Link>
      <button id='hamburger-menu'><img src={hamburgerMenu} alt='Hamburger Menu' /></button>
      <Links />
    </nav>
  );
};

export default Nav;
