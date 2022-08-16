import React from 'react';
import { Link } from 'react-router-dom';

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
          {
            character?.aliases.every(x => x.length>0) && (
            <h3>
              <span>{character?.aliases.length > 1 ?
              "Aliases " : "Alias "}</span>
              : {character?.aliases.join(', ') }
            </h3> 
            )
          }
        </div>

        <div className="character__content__actor">
          <h3>
            {
              character?.playedBy != 0 ?
              <span>Played by : </span> : <span></span>
            }
              {character?.playedBy}
          </h3>
        </div>

        <div className="character__content__gender">
          <h3>
            {
              character?.gender != 0 ?
              <span> Gender : </span> : <span></span>
            }
              {character?.gender}
          </h3>
        </div>

        <div className="character__content__born">
          <h3>
            {
              character?.born.length != 0 ?
              <span>Born to : </span> : <span></span>
            }
              {character?.born}
          </h3>
        </div>

        <div className="character__content__died">
          <h3>
            {
              character?.died.length != 0 ?
              <span>Died in : </span> : <span></span>
            }
              {character?.died}
          </h3>
        </div>

        <div className="character__content__books">
          {character?.books.every(x => x.length>0) && (
            <h3>
              <span>
                {character?.books.length > 1 ?
                  "Books " : "Book "}
              </span>
              : {character?.books.join(', ').replaceAll('https://anapioficeandfire.com/api/', '').replaceAll('s/', ' ')}
            </h3>
          )}        
        </div>

      </div>
        </Link>
    </div>
  );
}
