import Links from './Links';
import logo from '../assets/icons/Logo.svg';

const Nav = () => {
  return (
    <nav>
      <img id='logo' src={logo} alt='Little Lemon logo' />
      <Links />
    </nav>
  );
};

export default Nav;
