import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './character';
import Stats from './stats';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import './style.scss';

export default function Characters() {

  const [characters, setCharacters] = React.useState([]);
  const [filteredData, setFilteredData] = useState()
  const [page, setPage] = useState(117);

  useEffect(() => {
    getCharacters();
  } , []);
  
  const getCharacters = async () => {
    await axios.get(`https://anapioficeandfire.com/api/characters?page=${page}&pageSize=5`)
    .then(response => {
      const data = response.data;
      setCharacters(data);
      setFilteredData(data);
      setPage(page + 1);
    }).catch(error => {
      console.log(error);
    })
  }


  
  const name = characters.map((character, i) => {
    return {
      key : i,
      name : character.name};
  }
  )


  const handleOnSearch = (string, results) => {
    const inputFilter = document.querySelector('input[data-test="search-input"]')
    if (inputFilter.value.length < 1) {
      setFilteredData(characters)
    }
  }

  const handleOnHover = (result) => {
  }

  const handleOnSelect = (item) => {
    console.log(item, 'select')
    const searchResult = characters.filter((elem) => elem.name.toLowerCase().includes(item.name.toLowerCase()))
    setFilteredData(searchResult)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const seeMore = () => {
    setPage(page + 1);
    axios.get(`https://anapioficeandfire.com/api/characters?page=${page}&pageSize=5`)
    .then(response => {
      const data = response.data;
      setCharacters([...characters, ...data]);
      setFilteredData([...characters, ...data]);
    })
  }


  return (
  <div className='characters' id='content'>

    <Stats />

    <div className="characters__search">
      <ReactSearchAutocomplete
        className='search'
        items={name}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        styling={{
          backgroundColor: '#805433',
          color: '#fff',
          hoverBackgroundColor: '#110100',
          border: '2px solid #110100',
          fontFamily: 'Tangerine',
          fontSize: '2.5rem',
          iconColor: 'white',
        }}
      />
    </div>

      {
        filteredData?.map(character => {
          return (
            <Character
              key={character.url}
              index={character.url.split('characters/')[1]}
              character={character} />
          )
          })
      }

    <button onClick={seeMore} className='characters__button'>
      See More...
    </button>
  </div>
  );
}
