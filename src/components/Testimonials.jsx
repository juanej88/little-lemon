import Review from './Review';
import '../assets/styles/Testimonials.css';
import connor from '../assets/images/Connor.jpg';
import isla from '../assets/images/Isla.jpg';
import lachlan from '../assets/images/Lachlan.jpg';
import harper from '../assets/images/Harper.jpg';


const Testimonials = () => {
  const reviews = [
    {
      name: 'Connor S.',
      username: '@connor_s',
      review: "Little Lemon's dishes are a burst of flavor! The lemon-infused chicken was tender and tangy, perfectly complemented by their signature lemon rice. A delightful meal that leaves you craving more!",
      picture: connor,
    },
    {
      name: 'Isla D.',
      username: '@isla.dav',
      review: 'Every bite at Little Lemon feels like a taste of sunshine. Their citrus salmon salad was incredibly fresh, with just the right amount of lemon vinaigrette. A healthy, vibrant choice for any meal.',
      picture: isla,
    },
    {
      name: 'Lachlan M.',
      username: '@lachie_m',
      review: 'For those who adore lemon, Little Lemon is a must-visit. Their lemon cheesecake was a dream—creamy, tangy, and topped with a zesty lemon glaze. Absolutely heavenly!',
      picture: lachlan,
    },
    {
      name: 'Harper T.',
      username: '@harper.t',
      review: 'Discovering Little Lemon was a revelation! Their lemon-infused pasta was a comforting blend of savory and citrusy notes, a unique twist on traditional flavors. A gem of a find for any food enthusiast!',
      picture: harper,
    },
  ];

  const getReviews = () => {
    return reviews.map((user, i) => <Review key={i} user={user} />);
  };

  return (
    <section id='testimonials'>
      <h2>What our customers say!</h2>
      <article>
        {getReviews()}
      </article>
    </section>
  );
};

export default Testimonials;