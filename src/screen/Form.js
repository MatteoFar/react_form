import React from 'react';
import FormEmployee from '../components/FormEmployee';


class Form extends FormEmployee {
    render() {
        console.log(this.props)
        return(
        <div className="FormEmployee">
            <h1>Saisi d'un employé</h1>
            {/* <form onSubmit={this.submitForm}> */}
            <form onSubmit={this.test} >
                <fieldset>
                    <legend>Informations</legend>
                    <div className="form-data">
                        <label htmlFor="lastname">Nom</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            onChange={this.onChange}
                            value={this.props.lastname}
                        />    
                    </div>

                    <div className="fomr-data">
                        <label htmlFor="firstname">Prénom</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            onChange={this.onChange}
                            value={this.props.firstname}
                        />    
                    </div>

                    <div className="form-data">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={this.onChange}
                            value={this.props.email}
                        />                        
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Envoyer" />
                    </div>    
                </fieldset>
            </form>

           {/*  <div>
            <FormEmployee {...info} />
            </div>  */}

            </div>  
        )
         
  }
}


export default Form