import React, { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from '../../requests';
import HeroSimplified from '../HeroSimplified/HeroSimplified';
import Loader from '../Loader/Loader';
import './HeroesFeatured.css'

const featuredHeroesIds = [10, 502, 505];

function HeroesFeatured() {

  useEffect(() => {
    fetchAndRenderFeaturedHeroes();
  }, []);

  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  const fetchAndRenderFeaturedHeroes = async () => {
    let heroes = [];
    for (const heroId of featuredHeroesIds) {
      const hero = await getBasicHeroInfoById(heroId);
      heroes.push(hero);
    }
    setFeaturedHeroesList(heroes);
    setLoadingState(false);
  }

  return (
    <section className='featured'>
      <h1>Featured Heroes</h1>
      {!isLoading &&
        <div className='featured__list'>
          {featuredHeroesList.map(({ name, imgUrl, powerstats, id }) => (
            <HeroSimplified key={id} name={name} imgUrl={imgUrl} powerstats={powerstats} id={id}/>
          ))}
        </div>}
      {isLoading && <div className='loader-container'>
        <Loader />
        </div>}
    </section>
  );
}

export default HeroesFeatured;
