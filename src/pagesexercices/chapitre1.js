import React from "react";
import Affichage from './fonctionaffichage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const diapos = [{titre: '0cours1 : Notion d\'emplois / ressources et écriture comptable',
                type : 'diapo',
                contenu : <div><h1>diapo 1</h1><p>zejkfezjkfzejkfb ezfzeifhzejh ezf hezhf zefh zeufh </p></div>},
                {titre: '1cours1 : Notion d\'emplois / ressources et écriture comptable',
                type : 'diapo',
                contenu : <div>diapo2</div>},
                {titre: '2cours1 : Notion d\'emplois / ressources et écriture comptable',
                type : 'diapo',
                contenu : <div>diapo3</div>},
]


export default class Exportchapitre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {diapo:{}};
        this.i=0
     } 

     componentDidMount() {
        this.setState({diapo:diapos[this.i]})
      }
     
     nextdiapo= () => {this.i++
         this.setState({diapo:diapos[this.i]}) }
      
    render () {
        if (this.state.diapo == undefined) {
           return (<div className='listechapitres'>
                <h1>Bravo, ce chapitre est terminé</h1>
                <div className="diapobouttoncontenair"><Link to ="./"><button className="diapoboutton">Retourner au suivi</button></Link></div> 
                </div> )
        }
        return ( <div className='listechapitres'>
            <Affichage diapo={this.state} />
            <div className="diapobouttoncontenair"><button onClick={this.nextdiapo} className="diapoboutton" >Suivant</button></div>
            </div>)
    }
    
}



/*
Donc la il me faut une banque de données avec tous les exos et diapos

créer une fucntion dans un autre fichier qui prend des paramètres de la base de donnée et qui effectue un affichage en fonction du type de diapo où on est 
exemples : QCM, écritures comptable avec selecteur ou non, les données présaisies etc... diaporama, 
bulle d'aide et compteurs de progressionexemple : si on arrive à 4 bon de suite on passe au niveau suivant

un suivi de progression en haut et un enregistrement de la progresion dans la base de donnée de l'utilisateur


*/