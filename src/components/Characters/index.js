import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './character';
import Stats from './stats';

import './style.scss';

export default function Characters() {

  const [characters, setCharacters] = React.useState([]);
  const [ house, setHouse ] = React.useState([]);
  const [filteredData, setFilteredData] = useState()
  const [page, setPage] = useState(117);

  useEffect(() => {
    getCharacters();
    // getHouses();
  } , []);

  const getCharacters = async () => {
    await axios.get(`https://anapioficeandfire.com/api/characters?page=${page}&pageSize=5`)
    .then(response => {
      const data = response.data;
      setCharacters(data);
      setPage(page + 1);
    }).catch(error => {
      console.log(error);
    })
  }

  // const getHouses = async () => {
  //   await axios.get('https://anapioficeandfire.com/api/houses/')
  //   .then(response => {
  //     const data = response.data;
  //     setHouse(data);
  //   }
  //   ).catch(error => {
  //     console.log(error);
  //   }
  //   )
  // }

  const seeMore = () => {
    setPage(page + 1);
    axios.get(`https://anapioficeandfire.com/api/characters?page=${page}&pageSize=5`)
    .then(response => {
      const data = response.data;
      setCharacters([...characters, ...data]);
    })
  }

  const searchInput = (e) => {
    const { value } = e.target
    const searchResult = characters.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredData(searchResult)
  }


  return (
      <div className='characters' id='content'>
        <input type="text" name='inputSearch' placeholder='search a character ...' onChange={searchInput}/>

          <Stats />
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
          See More...
        </button>
      </div>
  );
}
