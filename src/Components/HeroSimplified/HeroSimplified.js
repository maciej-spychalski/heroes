import React from 'react';
import './HeroSimplified.css'

function HeroSimplified({ name, imgUrl, powerstats }) {
  return (
    <div className='featured__hero'>
      <h2>{name}</h2>
      <img className='featured__hero__img' src={imgUrl} alt={name} />
      <div className='featured__hero__stats'>
        <div>
          <p>{powerstats.combat}</p>
        </div>
        <div>
          <p>{powerstats.durability}</p>
        </div>
        <div>
          <p>{powerstats.intelligence}</p>
        </div>
        <div>
          <p>{powerstats.speed}</p>
        </div>
        <div>
          <p>{powerstats.strenght}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSimplified;
