import React from 'react';


import './style.scss';

export default function Character({ character }) {
  const BaseURL = 'https://anapioficeandfire.com/api/';
  return (
    <div  className='character'>

              <div>
                {/* <h2 >{houseName}</h2> */}
                {/* <p>{character.aliases.join(', ')}</p> */}
                <p>{character.allegiances}</p>
                {/* <p>{coatOfArms}</p><br></br> */}
              </div>
            
        
      

    </div>
  );
}
