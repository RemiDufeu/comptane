import React from "react";


const diapos = [{titre: '0cours1 : Notion d\'emplois / ressources et écriture comptable',
                type : 'diapo',
                contenu : <div>diapo1</div>},
                {titre: '1cours1 : Notion d\'emplois / ressources et écriture comptable',
                type : 'diapo',
                contenu : <div>diapo2</div>},
                {titre: '2cours1 : Notion d\'emplois / ressources et écriture comptable',
                type : 'diapo',
                contenu : <div>diapo3</div>},
]


function Affichage (props) {
    
    return (

    <div>
        <h1>{props.titre}</h1>
        {props.contenu}
    </div>

)
}


export default class Exportchapitre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {diapo:{}};
        console.log(this.state)
        this.i=0
     } 

     componentDidMount() {
        this.setState({diapo:diapos[this.i]})
      }
     
     nextdiapo= () => {this.i++
         this.setState({diapo:diapos[this.i]}) }
      
    render () {
        return ( <div>
            <Affichage titre={this.state.diapo.titre} contenu={this.state.diapo.contenu} />    
            <button onClick={this.nextdiapo}>Next</button>
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