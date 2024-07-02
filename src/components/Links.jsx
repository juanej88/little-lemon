import { Link } from 'react-router-dom';

const Links = () => {
  const listSections = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/'
    },
    {
      name: 'Menu',
      link: '/'
    },
    {
      name: 'Reservations',
      link: '/reservations'
    },
    {
      name: 'Order Online',
      link: '/'
    },
    {
      name: 'Login',
      link: '/'
    },
  ];
  
  const getLinks = listSections.map((item, idx) => {
    return (
    <li key={idx}>
      <Link to={`${item.link}`}>{item.name}</Link>
    </li>
    );
  });

  return (
    <ul className='links'>
      {getLinks}
    </ul>
  );
};

export default Links;