import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Chapitre1page from './chapitre1';
  import Chapitre2page from './chapitre2';

export default function monsuivi () {
    return (<div>Me revoila bien assez vite
                <ul>
                    <li><Link to ="/monsuivi/chapitre1">Chapitre1</Link></li>
                    <li><Link to ="/monsuivi/chapitre2">Chapitre2</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/monsuivi">
                        <div>Helllowwwww</div>
                    </Route>
                    <Route path="/monsuivi/chapitre1">
                        <Chapitre1page/>
                    </Route>
                    <Route path="/monsuivi/chapitre2"> 
                        <Chapitre2page/>
                    </Route>
                </Switch>
        </div>)
    
}