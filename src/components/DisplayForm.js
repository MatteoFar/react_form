import React, { Component } from 'react';

class DisplayFrom extends Component {
    render() {
        console.log(this)
    const { lastname, firstname, email } = this.props
  return (
    <div className="App">
                <h1>Saisi d'un employé</h1>
            {/* <form onSubmit={this.submitForm}> */}
            <form onSubmit={this.props.try} >
                <fieldset>
                    <legend>Informations</legend>
                    <div className="form-data">
                        <label htmlFor="lastname">Nom</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            onChange={this.props.onChange}
                            value={lastname}
                        />    
                    </div>

                    <div className="fomr-data">
                        <label htmlFor="firstname">Prénom</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            onChange={this.props.onChange}
                            value={firstname}
                        />    
                    </div>

                    <div className="form-data">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={this.props.onChange}
                            value={email}
                        />                        
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Envoyer" />
                    </div>    
                </fieldset>
            </form>
    </div>
  );
}
}

export default DisplayFrom;
