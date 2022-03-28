import React from 'react';
import * as icons from '../../assets/icons';
import combat from '../../assets/icons/boxing.svg';
import { Link } from 'react-router-dom';
import './HeroSimplified.css';



function HeroSimplified({ name, imgUrl, powerstats, id }) {
  return (
    <div className='featured__hero'>
      <h2>{name}</h2>
      <Link to={`/hero/${id}`}><img className='featured__hero__img' src={imgUrl} alt={`${name}`} /></Link>
      <div className='featured__hero__stats'>
        <div>
          <img className='featured__hero__stats__icon' src={icons.combat} alt="combat icon" />
          <p>{powerstats.combat}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={icons.durability} alt="durability icon" />
          <p>{powerstats.durability}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={icons.intelligence} alt="intelligence icon" />
          <p>{powerstats.intelligence}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={icons.speed} alt="speed icon" />
          <p>{powerstats.speed}</p>
        </div>
        <div>
          <img className='featured__hero__stats__icon' src={icons.strength} alt="strength icon" />
          <p>{powerstats.strength}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSimplified;
