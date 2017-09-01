import React, { Component } from 'react'
import logo from './calculatorLogo.png'
import Calculadora from './Calculadora'
import './App.css'


let mensaje = "calculadora"
mensaje = mensaje.toUpperCase()
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{mensaje}</h2>
        </div>
        <Calculadora />
      </div>
    );
  }
}

export default App;
