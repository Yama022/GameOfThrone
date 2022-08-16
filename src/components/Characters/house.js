import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './style.scss';

export default function House() {

  const { id } = useParams();

  const [ house, setHouse ] = React.useState([]);
  const [characters, setCharacters] = React.useState([]);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

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

  const getCharacters = async () => {
    await axios.get(`https://anapioficeandfire.com/api/characters`)
    .then(response => {
      const data = response.data;
      setCharacters(data);
    }).catch(error => {
      console.log(error);
    })
  }
  
  useEffect(() => {
    getHouses();
    getCharacters();
    scrollTop();
  } , []);

  console.log(house?.founder,'founder');
  

  return (
    <div className='house'>

      <div className='house__content'>

        <div className='house__content__name'>
          <h2>{house.name}</h2>
        </div>

        <div className='house__content__region'>
          <h3>
            {
              house?.region != 0 ?
              <span>Region : </span> : <span></span>
            }
              {house?.region}
          </h3>
        </div>

        <div className="house__content__founded">
          <h3>
            {
              house?.founded != 0 ?
              <span>Founded : </span> : <span></span>
            }
              {house?.founded}
          </h3>
        </div>

        <div className="house__content__founder">
          <h3>
            <Link
              to={`/characters/${house.founder ? house.founder.split('characters/')[1] : ''}`}
            >
            {
              house?.founder != 0 ?
              <span>Founder : </span> : <span></span>
            }
              {house?.founder ? house.founder.split('api/')[1] : ''}
            </Link>
          </h3>
        </div>

        <div className='house__content__weapon'>
          <h3>
            {
              house?.ancestralWeapons != 0 ?
              <span>Weapon : </span> : <span></span>
            }
              {house?.ancestralWeapons}
          </h3>

        </div>

        <div className="house__content__arms">
          <h3>
            {
              house.words != 0 ?
              <span>Arms : </span> : <span></span>
            }
              {house.coatOfArms}
          </h3>
        </div>

        <div className="house__content__seats">
          <h3>
            {
              house?.seats != 0 ?
              <span>Seats : </span> : <span></span>
            }
              {house?.seats}
          </h3>
        </div>

        <div className='house__content__words'>
          <h3>
            {
              house.words != 0 ?
              <span>Words : </span> : <span></span>
            }
              {house.words}
          </h3>
        </div>

        <div className="house__content__cadet">
        {
          house?.cadetBranches ?  <span>Cadet : </span> : ''
        }
          {
            house?.cadetBranches ?  house.cadetBranches.map(
              (member, index) => {
                return (
                    <Link
                    to={`/houses/${house.cadetBranches ? house.cadetBranches[index].split('/houses/')[1] : ''}`}
                    >
                    <h3>
                      {member.slice(34)}
                    </h3>
                  </Link>
                  )
                }
              ) : ''
            }
        </div>

        <div className='house__content__members'>
          <span>Members : </span>
            {
              house?.swornMembers ?  house.swornMembers.map(
                (member, index) => {
                  return (
                    <Link
                    to={`/${house.swornMembers[index].slice(34)}`}
                    >
                    <h3>
                      {member.slice(34)}
                    </h3>
                    </Link>
                  )
                }
              ) : ''
            }
              
  
        </div>

      </div>
    </div>
  );
}
