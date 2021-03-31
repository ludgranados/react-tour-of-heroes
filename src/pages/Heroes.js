import { useState, useEffect } from 'react';
import HeroCard from '../components/HeroCard';
import { heroData } from '../data/heroes';

const HeroesPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [alert, setAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // setHeroes(heroData);
    const foundHeroes = heroData.filter(hd => {
      return (
        hd.superhero.toLowerCase().includes(searchTerm.toLowerCase()) +
        hd.alter_ego.toLowerCase().includes(searchTerm.toLowerCase()) +
        hd.publisher.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    // console.log('these are my search results', searchResults);
    searchTerm === '' ? setHeroes(heroData) : setHeroes(foundHeroes);
  }, [searchTerm]);

  const updateFeatured = heroId => {
    // first find the hero from heroData by heroId
    let foundHero = heroData.find(hero => hero.id === +heroId);

    // updated foundHero.featured to be opposite of its current value
    foundHero.featured = !foundHero.featured;

    setAlert(true);
    setTimeout(() => {
      console.log('show after 2 seconds!');
      setAlert(false);
    }, 2000);
    console.log(foundHero);
  };

  const handleChange = event => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div id='heroes'>
      <div className='row text-center mt-3'>
        <div className='col'>
          <h2>View our Hero Database!</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='hero-search'
              placeholder='Search for a Superhero'
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          {alert ? (
            <div class='alert alert-success' role='alert'>
              A simple success alert—check it out!
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className='row'>
        {heroes.map(hero => {
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

export default HeroesPage;