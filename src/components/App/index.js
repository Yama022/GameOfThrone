// == Import
import {
  BrowserRouter, Route, Switch, NavLink,
} from 'react-router-dom';
import Characters from 'src/components/Characters';
import Detail from 'src/components/Characters/detail';
import titlePage from '../../images/titlePage.png';
import parchemin from '../../images/fond-parchemin.jpeg';

import './style.scss';

// == Composant
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="app--image">
          <img src={parchemin} alt="titlePage" />
        </div>

        <NavLink to="/">
          <div className="app__header">
            <img src={titlePage} alt={titlePage} />
            <h1 className="app__header__title">Game of Thrones</h1>
          </div>
        </NavLink>

        <Switch>
          <Route exact path="/" component={Characters} />
          <Route exact path="/characters/:id" component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
