import { useState } from 'react';
import { heroData } from '../data/heroes';
import { Link } from 'react-router-dom';

const Heroes = () => {

    const [heroes, setHeroes] = useState(heroData);

    return (
        <div id="heroes">

            {heroes.map((hero, index) => {

                return (
                    <li key={hero.id}>
                        <Link to={`/heroes/${hero.id}/${hero.alter_ego}`}>
                            {hero.superhero}
                        </Link>
                    </li>
                );

            })}

        </div>
    );
};

export default Heroes;