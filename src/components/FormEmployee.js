import React, { Component } from 'react';
import Form from '../screen/Form';

import info from '../info.json'

class FormEmployee extends Component {
    
    state = {
        lastname: '',
        firstname: '',
        email: '',
    }
    
    
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    
   /*  submitForm = (e) => {
        e.preventDefault();
    }
     */
    postData = () => {
        const config = {
            method: "POST",
            headers: { "Content-Type": "apllication/json" },
            body:JSON.stringify(this.state),
        }
        
        const url = "http://campus-bordeaux.ovh:3001/api/quests/employees/";
        
        fetch(url, config)
            .then(res => Response.JSON())
            .then(res => {
                if(res.error) {
                    alert(res.error)
                } else {
                    alert(`Employé ajouté avec l'ID ${res}!`)
                }
            }).catch(e => {
                console.error(e)
                alert(`Erreur lors de l'ajout d'un employé`)
            })
        }

        componentDidMount() {
            this.postData()
            
        }

        try = (e) => {    
            const again = ([this.state.lastname, this.state.firstname, this.state.email])
            e.preventDefault(e)
            console.log(again)
        }
        
}

export default FormEmployee;