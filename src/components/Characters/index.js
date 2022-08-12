import React, { useEffect } from 'react';
import axios from 'axios';

import Character from './character';

import './style.scss';

export default function Characters() {

  const [characters, setCharacters] = React.useState([]);
  const [ house, setHouse ] = React.useState([]);


  useEffect(() => {
    getCharacters();
    getHouses();
  } , []);

  const getCharacters = async () => {
    await axios.get('https://anapioficeandfire.com/api/characters?pageSize=50')
    .then(response => {
      const data = response.data;
      setCharacters(data);
      console.log(data);
    }).catch(error => {
      console.log(error);
    })
  }

  const getHouses = async () => {
    await axios.get('https://anapioficeandfire.com/api/houses/')
    .then(response => {
      const data = response.data;
      setHouse(data);
    }
    ).catch(error => {
      console.log(error);
    }
    )
  }


  return (
      <div className='characters'>
        <>
          {
            characters.map(character => {
              return (
                <Character
                  key={character.url}
                  index={character.url.split('characters/')[1]}
                  character={character} />
              )
              }
          )}
          
        </>
      </div>
  );
}
