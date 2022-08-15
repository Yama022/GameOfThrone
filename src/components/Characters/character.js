import React from 'react';
import { Link } from 'react-router-dom'
import './style.scss';

export default function Character({ character }) {
  return (
    <div  className='character'>
        <Link
          to={`/characters/${character.url.split('characters/')[1]}`}
        >

      <div className='character__content'>

        

        <div className='character__content__name'>
          <h2>{character.name}</h2>
        </div>

        <div className="character__content__aliases">
          <h3>{character.aliases.join(', ')}</h3>
        </div>

        <div className="character__content__actor">
          <h3>{character.playedBy}</h3>
        </div>

        <div className="character__content__gender">
          <h3>{character.gender}</h3>
        </div>

        <div className="character__content__born">
          <h3>{character.born}</h3>
        </div>

        <div className="character__content__died">
          <h3>{character.died}</h3>
        </div>

        <div className="character__content__books">
          <h3>{character.books.join(', ').replaceAll('https://anapioficeandfire.com/api/', '').replaceAll('s/', ' ')}</h3>
        </div>

      </div>
        </Link>

    </div>
  );
}
