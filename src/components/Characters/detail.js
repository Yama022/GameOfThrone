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
        console.log(data, 'data');
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

        <div className="detail__content__title">
          <h3>
            {
              characters?.titles.every((title) => title != 0) ? 
              <span>Title : </span> : <span></span>}
              {characters?.titles}
            
          </h3>
        </div>

        <div className="detail__content__culture">
          <h3>
            {
              characters?.culture != 0 ?
              <span>Culture : </span> : <span></span>}
              {characters?.culture}
          </h3>
        </div>

        <div className="detail__content__aliases">
          {
            characters?.aliases.every(x => x.length>0) && (
            <h3>
              <span>{characters?.aliases.length > 1 ?
              "Aliases " : "Alias "}</span>
              : {characters?.aliases.join(', ') }
            </h3> 
            )
          }
        </div>

        <div className="detail__content__allegiances">
          {
            characters?.allegiances.every(x => x.length>0) && (
            <h3>
              <span>
                {characters?.allegiances.length > 1 ?
                  "Allegiances " : "Allegiance "}
              </span>
              : {characters?.allegiances.join(', ').replaceAll('https://anapioficeandfire.com/api/', '').replaceAll('s/', ' ') }
            </h3>
            )
          }
        </div>

        <div className="detail__content__actor">
          <h3>
          {
              characters?.playedBy != 0 ?
              <span>Played by : </span> : <span></span>}
              {characters?.playedBy}
            </h3>
        </div>

        <div className="detail__content__gender">
          <h3>
            {characters?.gender != 0 ?
              <span> Gender : </span> : <span></span>}
              {characters?.gender}
          </h3>
        </div>

        <div className="detail__content__born">
          <h3>
            {characters?.born.length != 0 ?
              <span>Born to : </span> : <span></span>}
            {characters?.born}
          </h3>
        </div>

        <div className="detail__content__died">
          <h3>
            {characters?.died.length != 0 ?
              <span>Died in : </span> : <span></span>}
            {characters?.died}
          </h3>
        </div>

        <div className="detail__content__books">
            {characters?.books.every(x => x.length>0) && (
          <h3>
              <span>
                {characters?.books.length > 1 ?
                  "Books " : "Book "}
              </span>
            : {characters?.books.join(', ').replaceAll('https://anapioficeandfire.com/api/', '').replaceAll('s/', ' ')}
          </h3>
            )}
        </div>

        <div className="detail__content__tv">
          {characters?.tvSeries.every(x => x.length>0) && (
          <h3>
              <span>
                {characters?.tvSeries.length > 1 ?
                  "TV Series " : "TV Series "}
              </span>
            : {characters?.tvSeries.join(', ').replaceAll('https://anapioficeandfire.com/api/', '').replaceAll('s/', ' ')}
          
          </h3>
          )}
        </div>

      </div>
    </div>
  );
}
