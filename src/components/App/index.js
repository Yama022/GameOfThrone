// == Import
import titlePage from '../../images/titlePage.png';
import parchemin from '../../images/fond-parchemin.jpeg';
import Characters from 'src/components/Characters';

import './style.scss';

// == Composant
export default function App() {

  return (
  <div className="app">

    <div className="app--image">
      <img src={parchemin} alt="titlePage" />
    </div>

    <div className="app__header">
      <img src={titlePage} alt={titlePage} />
      <h1 className='app__header__title'>Game of Thrones</h1>
    </div>
    <Characters />
  </div>
  )
};

