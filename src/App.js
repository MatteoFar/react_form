import React, { Component } from 'react';

import AbForm from './components/AbFrom';
import info from './info.json'
import Form from './screen/Form'

import logo from './logo.svg';

import './App.css';

class App extends Component {

  render() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <AbForm />
      {/* <Form {...test}/> */}
    </div>
  );
}
}

export default App;
