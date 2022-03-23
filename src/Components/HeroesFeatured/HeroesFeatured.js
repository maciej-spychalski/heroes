import React, { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import './HeroesFeatured.css'

const featuredHeroesIds = [10, 502, 505];

function HeroesFeatured() {

  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []);

  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds) {
      const hero = await getBasicHeroInfoById(heroId);
      heroes.push(hero);
    }
    setFeaturedHeroesList(heroes);
  }

  return (
    <section className='featured'>
      <div className='featured__list'>
        {featuredHeroesList.map(({ name, imgUrl, powerstats }) => (
          <HeroSimplified name={name} imgUrl={imgUrl} powerstats={powerstats} />
        ))}
      </div>
    </section>
  );
}

export default HeroesFeatured;
