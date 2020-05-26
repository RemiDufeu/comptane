import {contact} from './contact'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import headercover from './img/hand-holding-pencil-at-meeting.jpg'


const contactindex = contact

contactindex()
const menu = [
  {name : 'Notre programme', link : "/notreprogramme"},
  {name : 'Nos offres', link : "/nosoffres"},
  {name : 'contact', link : "contact"},
  {name : 'version d\'éssai', link : "/notreprogramme"},
]

const homebar = menu.map((page) => 
  <li key= {page.name}  className="homebarli"><a href= {page.link}>{page.name}</a></li>)

function Login() {
    return (
      <div className="login">
        <button>S'inscrire</button>
        <button>Connexion</button>
      </div>
    )
  }


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  
  render() {
      return ( 
        <div>
          <ul className="homebarul">{homebar} <Login/> </ul>
          <img className="headcover" src={headercover} alt="comptabilité"></img>
          
        </div>
        
      );
    }
  }
  
  
  // ========================================
  
  ReactDOM.render(
    <Home/>,
    document.getElementById('root')
  );