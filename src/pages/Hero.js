import { useEffect, useState } from 'react';
import { heroData } from '../data/heroes'
import { useParams } from 'react-router-dom'

const Hero = () => {

    let { heroId } = useParams();
    const [hero, setHero] = useState({});
    
    // console.log(heroId);

    useEffect(() => {
        let foundHero = heroData.find(h => h.id === +heroId);
        console.log(foundHero);
        setHero(foundHero);
    }, []);

    return (
        <div id="hero">
            <h2>This is where {hero.superhero} lives!</h2>
        </div>
    );
};

export default Hero;