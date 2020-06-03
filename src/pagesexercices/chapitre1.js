import React from "react";
import Affichage from './fonctionaffichage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const diapos = [{titre: 'Introduction',
                type : 'diapo',
                contenu : <div><div className="problematique">La comptabilité c'est quoi? </div>
                <p>La comptabilité est la retranscription des flux, des dépenses et des recettes au sein d’une entreprise. Elle a pour but d’établir les documents financiers (bilan et compte de résultat) afin d’évaluer les performances et l’état général d’une entreprise.</p>
                <div><ul className='listediapo'>Dans les faits voilà des exemples de flux :<li>-Patrick achète un cahier à 2€.</li><li>-L’entreprise Paper vend 250 classeurs à un supermarché à 70€.</li><li>-La banque accorde un prêt à Patrick de 30 000€</li></ul></div>
                <p>Nous voyons à travers ces exemples que les flux peuvent être de différentes natures. En comptablité, nous nous interresserons plus particulièrement aux flux des sociétes.</p>
                </div>,
                 questions : [{options:[{},{}]}]
                },
                
                {titre: 'Notion d\'emplois / ressources',
                type : 'diapo',
                contenu : <div><p>Chaque flux a une origine et une destination. En comptabilité, l’origine est appelé ressource ou bien crédit. La destination correspond lui à l’emploi ou le débit (ces termes sont synonymes).</p>
                <ul className="listediapo">Pour illustrer ces notions, prenons un exemple :<li >L’entreprise Paper vend 250 classeurs à un supermarché à 70€.</li></ul>
                <p>Ici la ressource utilisée est le classeur produit par l’entreprise, il est à l’origine du flux. Cette vente permet d’obtenir l’argent du client (le supermarché) ce qui est la finalité du flux, l’emploi.</p>
                <div className="note"><p>Note : Selon le point de vue, les emplois et ressources sont inversés. Pour le supermarché la ressource est 120€ alors que les classeurs sont l’emploi.</p></div>
                </div>,
                 questions : [{options:[{},{}]}]
                },


                {titre: 'Exercice',
                type : 'qcm',
                questions : [{enonce : 'Un producteur vend 550€ de carottes, Quel est l\'emploi du producteur?', options:[{nom:'les 550€',checked:true},{nom:'les carottes',checked:false}]},
                             {enonce : '2Un producteur vend 550€ de carottes, Quel est l\'emploi du producteur?', options:[{nom:'les 550€',checked:true},{nom:'les carottes',checked:false}]},
                             {enonce : '3Un producteur vend 550€ de carottes, Quel est l\'emploi du producteur?', options:[{nom:'les 550€',checked:true},{nom:'les carottes',checked:false}]},
                    ]
                },

                {titre: 'Notion d\'emplois / ressources',
                type : 'diapo',
                contenu : <div><p>Chaque flux a une origine et une destination. En comptabilité, l’origine est appelé ressource ou bien crédit. La destination correspond lui à l’emploi ou le débit (ces termes sont synonymes).</p>
                <ul className="listediapo">Pour illustrer ces notions, prenons un exemple :<li >L’entreprise Paper vend 250 classeurs à un supermarché à 70€.</li></ul>
                <p>Ici la ressource utilisée est le classeur produit par l’entreprise, il est à l’origine du flux. Cette vente permet d’obtenir l’argent du client (le supermarché) ce qui est la finalité du flux, l’emploi.</p>
                <div className="note"><p>Note : Selon le point de vue, les emplois et ressources sont inversés. Pour le supermarché la ressource est 120€ alors que les classeurs sont l’emploi.</p></div>
                </div>,
                 questions : [{options:[{},{}]}]
                },
                {titre: 'Exercice',
                type : 'qcm',
                questions : [{enonce : 'ppUn producteur vend 550€ de carottes, Quel est l\'emploi du producteur?', options:[{nom:'les 550€',checked:true},{nom:'les carottes',checked:false}]},
                             {enonce : 'pp2Un producteur vend 550€ de carottes, Quel est l\'emploi du producteur?', options:[{nom:'les 550€',checked:true},{nom:'les carottes',checked:false}]},
                             {enonce : 'pp3Un producteur vend 550€ de carottes, Quel est l\'emploi du producteur?', options:[{nom:'les 550€',checked:true},{nom:'les carottes',checked:false}]},
                    ]
                },
]


export default class Exportchapitre extends React.Component {
    constructor(props) {
        super(props);
     } 

    render () {
        return ( <div className='listechapitres'>
            <Affichage diapos={diapos} />
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