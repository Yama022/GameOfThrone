import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.scss';

export default function Character({ character }) {
  const BaseURL = 'https://anapioficeandfire.com/api';
  // console.log(character);
  return (
    <div  className='character'>

              <div className='character__content'>

                <NavLink
                  to={`/detail/${character.url.split('characters/')[1]}`}
                >
                

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

                </NavLink>
              </div>

    </div>
  );
}
