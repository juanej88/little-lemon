const Links = () => {
  const listSections = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];
  const getLinks = listSections.map((item, idx) => {
    return <li key={idx}><a href={`/${item.split(' ')[0].toLowerCase()}`}>{item}</a></li>
  });

  return (
    <ul className='links'>
      {getLinks}
    </ul>
  );
};

export default Links;