import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './style.scss';

export default function Detail() {
  const { id } = useParams();

  const [characters, setCharacters] = useState(null);

  const getCharacters = async () => {
    await axios.get(`https://anapioficeandfire.com/api/characters/${id}`)
      .then((response) => {
        const { data } = response;
        setCharacters(data);
      }).catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCharacters();
  }, [id]);

  return (
    <div className="detail">

      <div className="detail__content">

        <div className="detail__content__name">
          <h2>{characters?.name}</h2>
        </div>

        <div className="detail__content__aliases">
          {
            
            characters?.aliases.every(x => x.length>0) && (
            <h3>
              {characters?.aliases.length > 1 ?
              "Aliases " : "Alias "}
              : {characters?.aliases }
            </h3> 
            )
          }
        </div>

        <div className="detail__content__actor">
          <h3>{characters?.playedBy}</h3>
        </div>

        <div className="detail__content__gender">
          <h3>{characters?.gender}</h3>
        </div>

        <div className="detail__content__born">
          <h3>{characters?.born}</h3>
        </div>

        <div className="detail__content__died">
          <h3>{characters?.died}</h3>
        </div>

        <div className="detail__content__books">
          <h3>{characters?.books.join(', ').replaceAll('https://anapioficeandfire.com/api/', '').replaceAll('s/', ' ')}</h3>
        </div>

        <div className="detail__content__tv">
          <h3>{characters?.tvSeries}</h3>
        </div>

      </div>
    </div>
  );
}
