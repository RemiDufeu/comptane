import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Chapitre1page from './chapitre1';
  import Chapitre2page from './chapitre2';

  function Logout() {
    return (
      <div className="login">
        <Link to ='/'><button >Se déconnecter</button></Link>
      </div>
    )
  }
  const menu = <div>
    <ul className="headertabs">
    <Logout/>
      <li>
        Mon apprentissage
      </li>
      
    </ul>
  </div>

export default function monsuivi () {
    return (<div>{menu}
                
                <Switch>
                    <Route exact path="/monsuivi">
                    
                    <div className='listechapitres'><ul >
                      <Link to ="/monsuivi/chapitre1"><li>Chapitre1 :<br></br><label> Notion d'emplois/ressources et écritures comptables</label></li></Link>
                      <li><Link to ="/monsuivi/chapitre2">Chapitre2</Link></li>
                    </ul></div>
                        
                    </Route>
                    <Route path="/monsuivi/chapitre1" >
                        <Chapitre1page/>
                    </Route>
                    <Route path="/monsuivi/chapitre2"> 
                        <Chapitre2page/>
                    </Route>
                </Switch>
        </div>)
    
}