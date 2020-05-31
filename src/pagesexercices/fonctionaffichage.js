import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export default function Affichage (props) {
    let curentdiapo = props.diapo.diapo
    if (curentdiapo == undefined) {
        return (
            <div>
                <h1>Il semblerait qu'il y ait une erreur dans votre session</h1>
                <div className="diapobouttoncontenair"><Link to ="./"><button className="diapoboutton">Retourner au suivi</button></Link></div> 
            </div>
        )
    }
    return (
        
    <div>
        <h1>{curentdiapo.titre}</h1>
        {curentdiapo.contenu}
    </div> 

)
}