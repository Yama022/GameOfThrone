import React, { useEffect } from 'react';
import ReactEChart from "echarts-for-react";
import axios from 'axios';
import './style.scss';

export default function Stats() {

  const [books, setbooks] = React.useState([]);
  const [ house, setHouse ] = React.useState([]);
  const [characters, setCharacters] = React.useState([]);

  
  const getBooks = async () => {
      await axios.get(`https://anapioficeandfire.com/api/books?pageSize=5`)
      .then(response => {
          const data = response.data;
          setbooks(data);
        }).catch(error => {
            console.log(error);
          })
  }

  const getHouses = async () => {
    await axios.get('https://anapioficeandfire.com/api/houses?pageSize=5')
    .then(response => {
      const data = response.data;
      setHouse(data);
    }
    ).catch(error => {
      console.log(error);
    }
    )
  }

  const getCharacters = async () => {
    await axios.get(`https://anapioficeandfire.com/api/characters??pageSize=5`)
    .then(response => {
      const data = response.data;
      setCharacters(data);
    }).catch(error => {
      console.log(error);
    })
  }

        
  useEffect(() => {
    getBooks();
    getHouses();
    getCharacters();
  } , []);

  const booksOption = {
    title: {
      text: 'Books',
      textAlign: 'left',
      left: 'center',
      textStyle: {
        fontSize: 25,
      }
    },
    xAxis: {
      name: 'povCharact',
      nameTextStyle: {
        fontSize: 12,
        color: '#fff',
      },
      type: 'category',
      data: ["One", "Two", "Three", "Four", "Five"]
    },
    yAxis: {
      name: 'characters',
      nameTextStyle: {
        fontSize: 12,
        color: '#fff',
      },
      type: 'value',
    },
    tooltip: {},
    series: [
      {
        data: books.map(x => x.characters.length),
        type: "line",
      },
      {
        data: books.map(x => x.povCharacters.length),
        type: "line",
      },
    ]
  }


  const housesOption = {
    title: {
      text: 'Houses',
      textAlign: 'left',
      left: 'center',
      textStyle: {
        fontSize: 25,
      }
    },
    xAxis: {
      name: 'titles',
      nameTextStyle: {
        fontSize: 12,
        color: '#fff',
      },
      type: 'category',
      data: ["One", "Two", "Three", "Four", "Five"]
    },
    yAxis: {
      name: 'swornMembers',
      nameTextStyle: {
        fontSize: 12,
        color: '#fff',
      },
      type: 'value',
    },
    tooltip: {},
    series: [
      {
        data: house.map(x => x.swornMembers.length),
        type: "bar",
        stack: "total"
      },
      {
        data: house.map(x => x.titles.length),
        type: "bar",
        stack: "total"
      },
    ]
}


  const charactersOption = {
    title: {
      text: 'characters',
      textAlign: 'left',
      left: 'center',
      textStyle: {
        fontSize: 25,
      }
    },
    xAxis: {
      name: 'books',
      nameTextStyle: {
        fontSize: 12,
        color: '#fff',
      },
      type: 'category',
      data: ["One", "Two", "Three", "Four", "Five"]
    },
    yAxis: {
      name: 'tvSeries',
      nameTextStyle: {
        fontSize: 12,
        color: '#fff',
      },
      type: 'value',
    },
    tooltip: {},
    series: [
      {
        data: characters.map(x => x.books.length),
        type: "line",
      },
      {
        data: characters.map(x => x.tvSeries.length),
        type: "bar",
      },
    ]
  }


  return (
    <div className='stats'>

      <div className="stats__chart">
          <ReactEChart
            style={{ width: '33%', minHeight: '33%', textAlign: 'center' }} 
            option={booksOption}
          />
          <ReactEChart
            style={{ width: '33%', minHeight: '33%'}} 
            option={housesOption}
          />
          <ReactEChart
            style={{ width: '33%', minHeight: '33%'}} 
            option={charactersOption}
          />
        </div>
    </div>
  );
}
