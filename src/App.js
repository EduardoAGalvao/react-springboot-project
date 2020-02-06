import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabela from './dentista/TabelaDentista'
import Formulario from './dentista/FormularioDentista'
import axios from 'axios';

class App extends Component {

  state = {
    dentistas: []
  };

  componentDidMount(){
    axios.get('http://localhost:8080/odonto/dentistas')
      .then((res) => {
        const dentistas = res.data
        this.setState({dentistas})
      })
  }

  render(){
    return (
      <div>
        <Formulario />
        <Tabela listaDentistas={this.state.dentistas} />
      </div>
    );
  }
  
}

export default App;
