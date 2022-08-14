import React, { useEffect }  from 'react';
import axios from 'axios';
import './style.scss';

export default function Detail(props) {
  const { match : {
    url
  } } = props;

  const charact = Number(url.split('/')[2])
  const [characters, setCharacters] = React.useState([]);

  useEffect(() => {
    getCharacters();
    charactersHidden();
  } , []);

  const getCharacters = async () => {
    await axios.get(`https://anapioficeandfire.com/api/characters/${charact}`)
    .then(response => {
      const data = response.data;
      setCharacters(data);
      console.log(data, 'data')
      
    }).catch(error => {
      console.log(error);
    })
  }

  const charactersHidden = () => {
    const charac = document.querySelector('.characters');
    charac.style.display = 'none';
  }


  return (
    <div className='detail'>

      <div className='detail__content'>

        <div className='detail__content__name'>
          <h2>{characters.name}</h2>
        </div>

        <div className="detail__content__aliases">
          <h3>aliases : {characters.aliases}</h3>
        </div>

        <div className="detail__content__actor">
          <h3>{characters.playedBy}</h3>
        </div>

        <div className="detail__content__gender">
          <h3>{characters.gender}</h3>
        </div>

        <div className="detail__content__born">
          <h3>{characters.born}</h3>
        </div>

        <div className="detail__content__died">
          <h3>{characters.died}</h3>
        </div>

        <div className="detail__content__books">
          <h3>{characters.books}</h3>
        </div>

        <div className="detail__content__tv">
          <h3>{characters.tvSeries}</h3>
        </div>

      </div>
    </div>
  );
}
