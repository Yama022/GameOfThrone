import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './style.scss';

export default function House() {
  const { id } = useParams();
  // console.log(id)

  const [ house, setHouse ] = React.useState([]);

  const getHouses = async () => {
    await axios.get(`https://anapioficeandfire.com/api/houses/${id}`)
    .then(response => {
      const data = response.data;
      // console.log(data, 'data');
      setHouse(data);

    }
    ).catch(error => {
      console.log(error);
    }
    )
  }


  useEffect(() => {
    getHouses();
  } , []);

  console.log('Composant House');


  return (
    <div className='house'>
      {/* <h1>{house.name}</h1> */}
      <h2>House</h2>
    </div>
  );
}
