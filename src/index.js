import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import headercover from './img/hand-holding-pencil-at-meeting.jpg'
import Contactpage from './contact'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*const routes = [
  {
    path: '/',
    component : Accueil
  },
  {
    path: '/NosOffres',
    component : NosOffres
  },
  {
    path: '/Contact',
    component : Contactpage
  },
  {
    path: '/Versiondessai',
    component : Versiondessai
  },
]
*/



function Login() {
    return (
      <div className="login">
        <button>S'inscrire</button>
        <button>Connexion</button>
      </div>
    )
  }


class Home extends React.Component {
  
  render() {
      return ( 
        <Router>
          <div>
            <ul>
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
            </ul>

            <Switch>
              <Route exact path="/">
                <Accueil />
              </Route>
              <Route path="/NosOffres">
                <NosOffres />
              </Route>
              <Route path="/Contact">
                <Contactpage />
              </Route>
              <Route path="/Versiondessai">
                <Versiondessai />
              </Route>
            </Switch>
          </div>
        </Router>
        
      );
    }
  }

  function Accueil() {
    return (
      <div>Accueil</div>
    )
  }
  function NosOffres() {
    return (
      <div>Nos offres</div>
    )
  }
  function Versiondessai() {
    return (
      <div>Version d'essai</div>
    )
  }
  
  // ========================================
  
  ReactDOM.render(
    <Home/>,
    document.getElementById('root')
  );