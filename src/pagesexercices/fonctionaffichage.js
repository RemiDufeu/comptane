import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export default class Affichage extends React.Component{
    constructor(props) {
        super(props)
        this.i=0
        this.diapos=props.diapos
        this.diapo=this.diapos[this.i]
        this.clickchecked = this.clickchecked.bind(this)
        this.checkedbox = props.diapos[this.i].questions[0].options.map(obj => {
            return {checked:false}
        })
        this.setState({checkboxs:this.checkedbox})
    }
    clickchecked (e) {
        let id = e.target.id
        this.checkedbox[id].checked = !this.checkedbox[id].checked
        this.setState({checkeboxs: this.checkedbox});
        console.log(this.state)
        }
    
    componentDidMount() {
        this.setState({diapo:this.diapo});
        this.setState({checkeboxs: this.checkedbox});
        console.log(this.state)
      }
    
    nextdiapo= () => {
        let correction = []
        let reponses = []
        if (this.state.diapo.type === 'qcm') {
            if (this.state.diapo.questions[1] == undefined) {
                this.i++
                this.diapo=this.diapos[this.i]
                this.setState({diapo:this.diapos[this.i]})
            } else {
                correction = this.state.diapo.questions[0].options.map(obj => {
                    return obj.checked
                })
                reponses = this.state.checkeboxs.map(obj => {
                    return obj.checked
                })
                console.log(correction)
                console.log(reponses)
                if (correction[0] === reponses[0]) {
                    console.log('tu as juste!')
                } else {
                    console.log('tu as faux')
                }
                let remove = this.state.diapo.questions.shift()
                this.state.diapo.questions.push(remove)
                
                this.diapo=this.diapos[this.i]
                this.setState({diapo:this.diapos[this.i]})
                this.checkedbox = this.diapos[this.i].questions[0].options.map(obj => {
                    return {checked:false}
                })
                this.setState({checkeboxs:this.checkedbox})
            }

        } else if (this.state.diapo.type === 'diapo') {
            this.i++
            this.diapo=this.diapos[this.i]
            this.setState({diapo:this.diapos[this.i]})
            } else {

            }
        }
     
        render ()  {
         
       if (this.diapo == undefined) {
            return (
                <div className='curentdiapo'>
                    <h1>Il semblerait qu'il y ait une erreur dans votre session</h1>
                    <div className="diapobouttoncontenair"><Link to ="./"><button className="diapoboutton">Retourner au suivi</button></Link></div> 
                </div>
            )
        }
        
        if (this.diapo.type === 'diapo') {
            return (
            
                <div className='curentdiapo'>
                    <h1>{this.diapo.titre}</h1>
                    {this.diapo.contenu}
                    <div className="diapobouttoncontenair"><button onClick={this.nextdiapo} className="diapoboutton" type="submit">Suivant</button></div>
                </div> )
        }
        
        if (this.diapo.type === 'qcm') {
           
           
            const listeQCM= this.diapo.questions[0].options.map((curentoption) =>
            <li key={curentoption.name}> <input type="checkbox" id={this.diapo.questions[0].options.indexOf(curentoption)} name={curentoption.nom} checked={this.state.checkeboxs[this.diapo.questions[0].options.indexOf(curentoption)].checked} onChange={this.clickchecked}/>{curentoption.nom}</li>
            );
            
            return (
            
                <div className='curentdiapo'>
                    <h1>QCM</h1>
                    <p><b>Cochez la ou les bonne(s) réponse(s).</b></p>
                    <div>{this.diapo.questions[0].enonce}</div>
                    <ul className="listediapo"> {listeQCM}</ul>
                    <div className="diapobouttoncontenair"><button onClick={this.nextdiapo} className="diapoboutton" type="submit">Suivant</button></div>
                </div> )
        }  
  }

}