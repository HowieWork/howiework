import Hero from '../components/Hero';
import Interaction from '../components/Interaction';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      {/* INTERACTION SECTION */}
      <div>Interactive</div>
      <Interaction />

      {/* HERO SECTION */}
      <Hero />

      {/* SELECTED WORKS SECTION */}
      {/* SELECTED POSTS SECTION */}
      {/* ABOUT SECTION */}
      {/* CONTACT SECTION */}
    </div>
  );
};

export default Home;
