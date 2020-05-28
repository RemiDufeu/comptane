import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import headercover from './img/hand-holding-pencil-at-meeting.jpg'
import Contactpage from './pagesmenu/contact'
import Accueilpage from './pagesmenu/accueil'
import NosOffrespage from './pagesmenu/nosoffres'
import Essaipage from './pagesmenu/versionessai'
import Monsuivipage from './pagesexercices/monsuivi'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Login() {
    return (
      <div className="login">
        <button >S'inscrire</button>
        <Link to="/monsuivi"><button id='connexion'>Connexion</button></Link>
      </div>
    )
  }
  const menu = <div>
    <ul className="headertabs">
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/NosOffres">Nos offres</Link>
      </li>
      <li>
        <Link to="/Contact">Contact</Link>
      </li>
      <li>
        <Link to="/Versiondessai">Version d'essai</Link>
      </li>
      <Login/>
    </ul>
      <img id='headercover' src={headercover} alt='headercover'></img>
  </div>

class Home extends React.Component {
  
  render() {
      return ( 
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                {menu}
                <Accueilpage />
              </Route>
              <Route path="/NosOffres">
                {menu}
                <NosOffrespage />
              </Route>
              <Route path="/Contact">
                {menu}  
                <Contactpage />
              </Route>
              <Route path="/Versiondessai">
                 {menu}
                <Essaipage />
              </Route>
              <Route path="/monsuivi">
                <Monsuivipage />
              </Route>
            </Switch>
          </div>
        </Router>
        
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Home/>,
    document.getElementById('root')
  );