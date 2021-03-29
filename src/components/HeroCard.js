import { useEffect, useState } from 'react';
import { heroData } from '../data/heroes';

const HeroCard = () => {

    const [heroes, setHeroes] = useState(heroData);

    useEffect(() => {
        let featured = heroData.filter(hero => hero.featured);

        console.log(featured);

        setHeroes(featured);
    }, []);

    return (
        <div></div>
    );

}

export default HeroCard;