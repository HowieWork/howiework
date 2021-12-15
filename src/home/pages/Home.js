import Hero from '../components/Hero';
import Interaction from '../components/Interaction';
import SelectedWorks from '../components/SelectedWorks';
import SelectedPosts from '../components/SelectedPosts';
import About from '../components/About';
import Contact from '../components/Contact';
import './Home.css';

const Home = () => {
  return (
    <div className='center-flex-column responsive-width home-container'>
      {/* INTERACTION SECTION */}
      <Interaction />

      {/* HERO SECTION */}
      <Hero />

      {/* SELECTED WORKS SECTION */}
      <SelectedWorks />

      {/* SELECTED POSTS SECTION */}
      <SelectedPosts />

      {/* ABOUT SECTION */}
      <About />

      {/* CONTACT SECTION */}
      <Contact />
    </div>
  );
};

export default Home;
