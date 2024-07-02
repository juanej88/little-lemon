import Links from './Links';
import '../assets/styles/Footer.css';
import footerImg from '../assets/icons/restaurant.jpg';

const Footer = () => {
  const contactLinks = ['Address', 'Phone Number', 'Email'];
  const getContactLinks = contactLinks.map((item, idx) => {
    return <li key={idx}><a href={`/${item.toLowerCase()}`}>{item}</a></li>
  });

  const socialLinks = ['Facebook', 'Instagram', 'Twitter'];
  const getSocialLinks = socialLinks.map((item, idx) => {
    return <li key={idx}><a href={`/${item.toLowerCase()}`}>{item}</a></li>
  });

  return (
    <footer>
      <img 
        src={footerImg} 
        alt='Little Lemon balcony' 
      />
      <section>
        <h3>Doormat Navigation</h3>
        <Links />
      </section>
      <section>
        <h3>Contact</h3>
        <ul>
          {getContactLinks}
        </ul>
      </section>
      <section>
        <h3>Social Media Links</h3>
        <ul>
          {getSocialLinks}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
