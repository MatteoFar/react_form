import React, { Component } from 'react';
import DisplayFrom from './DisplayForm';

class AbForm extends Component {
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

  try = (e) => {    
    e.preventDefault()
    const again = ([this.state.lastname, this.state.firstname, this.state.email])
    console.log(again)
}
    
  render() {
    // const {lastname,firstname,email} = this.state
  return (
    <div className="App">
      <DisplayFrom {...this.state} onChange={this.onChange} try={this.try}/>
    </div>
  );
}
}

export default AbForm;
