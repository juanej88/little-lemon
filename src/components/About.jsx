import '../assets/styles/About.css';
import chefsA from '../assets/images/Mario and Adrian A.jpg';
import chefsB from '../assets/images/Mario and Adrian b.jpg';

const About = () => {
  return (
    <section id='about'>
      <article>
        <h2 className='markazi'>Little Lemon</h2>
        <span className='markazi'>Chicago</span>
        <p>Welcome to Little Lemon, where Mediterranean cuisine is elevated by chefs Mario and Adrian. Experience their passion for culinary excellence as they craft dishes that blend tradition with innovation. Join us for a dining journey that promises to delight your palate and captivate your senses.</p>
      </article>
      <aside>
        <img id='chefsA' src={chefsA} alt='Chefs Mario and Adrian talking to each other' />
        <img id='chefsB' src={chefsB} alt='Chefs Mario and Adrian laughing together' />
      </aside>
    </section>
  );
};

export default About;