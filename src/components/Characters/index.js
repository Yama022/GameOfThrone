import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Character from './character';

import './style.scss';

export default function Characters() {

  const [characters, setCharacters] = React.useState([]);
  const [ house, setHouse ] = React.useState([]);
  const [filteredData, setFilteredData] = useState()

  useEffect(() => {
    getCharacters();
    getHouses();
  } , []);

  const getCharacters = async () => {
    await axios.get('https://anapioficeandfire.com/api/characters?page=117&pageSize=5')
    // page=211&pageSize=5 = tyrion lannister
    // page=205&pageSize=5 = theon greyjoy
    // page=192&pageSize=5 = sansa stark
    // page=181 = Robert Baratheon
    // page=117 = Jon Snow
    .then(response => {
      const data = response.data;
      setCharacters(data);
      console.log(data, 'data')
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

  const seeMore = () => {
    console.log('see more');
  }

  const searchInput = (e) => {
    console.log(e.target.value);
    const { value } = e.target
    const searchResult = characters.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredData(searchResult)
    console.log(searchResult, 'searchResult');
  }

  return (
      <div className='characters' id='content'>
        <input type="text" name='inputSearch' placeholder='search a character ...' onChange={searchInput}/>
        <>
          {
            filteredData ? filteredData.map(character => {
              return (
                      <Character
                        key={character.url}
                        index={character.url.split('characters/')[1]}
                        character={character} />
                    )
            }
            ) : characters.map(character => {
                  return (
                    <Character
                      key={character.url}
                      index={character.url.split('characters/')[1]}
                      character={character} />
                  )
                  }
            )
          }

          
        </>
        <button onClick={seeMore} className='characters__button'>
          See More
        </button>
      </div>
  );
}
