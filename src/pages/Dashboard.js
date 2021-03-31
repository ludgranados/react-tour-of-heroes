import { useEffect, useState } from 'react';
import HeroCard from '../components/HeroCard';
import { heroData } from '../data/heroes';
import '../App.css';

const DashboardPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [alert, setAlert] = useState(false);
  // console.log(heroData);

  useEffect(() => {
    let featured = heroData.filter(hero => hero.featured);
    // console.log(featured);
    setHeroes(featured);
  }, [alert]);

  const updateFeatured = heroId => {
    // first find the hero from heroData by heroId
    let foundHero = heroData.find(hero => hero.id === +heroId);

    // updated foundHero.featured to be opposite of its current value
    foundHero.featured = !foundHero.featured;
    showAlert();
  };

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  return (
    <div id='dashboard-page'>
      <div className='row text-center mt-3'>
        <div className='col'>
          <h2>Welcome to the tour of Heroes!</h2>
          <h4 className='text-secondary'>Featured Heroes</h4>
        </div>
      </div>
      <div className='row'>
        {heroes.map((hero, index) => {
          return (
            <div className='col-sm-12 col-md-3' key={hero.id}>
              <HeroCard hero={hero} updateFeatured={updateFeatured} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardPage;