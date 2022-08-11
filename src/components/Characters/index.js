import React, { useEffect } from 'react';
import axios from 'axios';

import Character from './character';

import './style.scss';

export default function Characters() {

  const [characters, setCharacters] = React.useState([]);

  useEffect(() => {
      axios.get('https://anapioficeandfire.com/api/characters?limit=10')
    .then(response => {
      console.log(response.data);
      const data = response.data;
      setCharacters(data);
      return data;
    }).catch(error => {
      console.log(error);
    })
  } , []);

  return (
    <div>Characters
      <>
        {
          characters.map(character => {
            return <Character key={character.url} character={character} />
          }
        )}
        
      </>
    </div>
  );
}
