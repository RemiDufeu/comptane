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
        this.memereponses = ''
        this.setState({checkboxs:this.checkedbox})
        this.showreponse = true
        this.compteurreponses = 0
        this.correction = []
        this.reponses = []
    }
    clickchecked (e) {
        let id = e.target.id
        this.checkedbox[id].checked = !this.checkedbox[id].checked
        this.setState({checkeboxs: this.checkedbox});
        }
    
    componentDidMount() {
        this.setState({diapo:this.diapo});
        this.setState({checkeboxs: this.checkedbox});
        this.setState({verification: []})
      }
    
    nextdiapo= () => {
        
        if (this.state.diapo.type === 'qcm') {
            if (this.state.diapo.questions[1] == undefined) {
                this.i++
                this.diapo=this.diapos[this.i]
                this.setState({diapo:this.diapos[this.i]})
            } else {
                
                if (this.showreponse == false) {
                    this.setState({verification: []})
                    this.memereponses = ''
                    if (this.compteurreponses > 2) {
                        this.i++
                        this.checkedbox = this.diapo.questions[0].options.map(obj => {
                            return {checked:false}
                        })
                        this.setState({checkeboxs:this.checkedbox})
                        this.diapo=this.diapos[this.i]
                        this.compteurreponses = 0
                        this.showreponse = true
                        this.setState({diapo:this.diapos[this.i]})
                    } else {
                let remove = this.state.diapo.questions.shift()
                this.state.diapo.questions.push(remove)
                
                this.diapo=this.diapos[this.i]
                this.setState({diapo:this.diapos[this.i]})
                this.checkedbox = this.diapos[this.i].questions[0].options.map(obj => {
                    return {checked:false}
                })
                this.setState({checkeboxs:this.checkedbox})
                this.showreponse = !this.showreponse
                
                }} else {
                    this.correction = this.state.diapo.questions[0].options.map(obj => {
                        return obj.checked
                    })
                    this.reponses = this.state.checkeboxs.map(obj => {
                        return obj.checked
                    })
                    let i = 0
                    let verif = []
                    for (let reponse of this.reponses ) {
                        if (this.memereponses === '' && !reponse === this.correction[i])
                            {this.memereponses = false
                            verif.push(true)
                        } else if (!reponse === this.correction[i]){
                            verif.push(true)
                        } else {
                            verif.push(false)
                        }
                        i++
                    }
                    if (this.memereponses === '') {
                        this.memereponses =true
                    }
                    this.setState({verification:verif})
                    if (this.memereponses === true) {
                        this.compteurreponses ++
                    } else {
                        if (this.compteurreponses > 0) {
                            -- this.compteurreponses 
                        }
                    }
                    i=0
                    console.log(this.compteurreponses)
                    this.showreponse = !this.showreponse
                }
            
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
                    <h1>Bravo, vous avez terminé ce chapitre.</h1>
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
            const warning = {
                color : 'red'
            }
            const rien = {
                color : 'black'
            }
            const listeQCM= this.diapo.questions[0].options.map((curentoption) =>
            <li style={!this.state.verification[this.diapo.questions[0].options.indexOf(curentoption)] ? rien : warning} key={curentoption.name}> <input type="checkbox" id={this.diapo.questions[0].options.indexOf(curentoption)} name={curentoption.nom} checked={this.state.checkeboxs[this.diapo.questions[0].options.indexOf(curentoption)].checked} onChange={this.clickchecked}/>{curentoption.nom}</li>
            );
            
            return (
            
                <div className='curentdiapo'>
                    <h1>QCM</h1>
                    <p><b>Cochez la ou les bonne(s) réponse(s).</b></p>
                    <div>{this.diapo.questions[0].enonce}</div>
                    <ul className="listediapo"> {listeQCM}</ul>
                        <div className='successmsg'>{this.memereponses? 'Bravo, tu as répondu juste à toutes les questions !' : ''}</div>
                    <div className="diapobouttoncontenair"><button onClick={this.nextdiapo} className="diapoboutton" type="submit">Suivant</button></div>
                </div> )
        }  
  }

}