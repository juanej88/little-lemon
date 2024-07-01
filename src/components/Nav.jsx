import Links from './Links';
import '../assets/styles/Nav.css';
import logo from '../assets/icons/Logo.svg';

const Nav = () => {
  return (
    <nav>
      <a id='logo' href='./'><img src={logo} alt='Little Lemon logo' /></a>
      <Links />
    </nav>
  );
};

export default Nav;
