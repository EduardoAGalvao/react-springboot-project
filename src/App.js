import React, { Component } from 'react';
import './App.css';
import Tabela from './dentista/TabelaDentista'
import Formulario from './dentista/FormularioDentista'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  state = {
    dentistas: []
  };

  //Método para carregar todos os dentistas assim que a aplicação for montada
  componentDidMount(){
    axios.get('http://localhost:8080/odonto/dentistas')
      .then((res) => {
        const dentistas = res.data
        this.setState({dentistas})
      })
  }

  enviarDados = (dentista) =>{

    axios.post('http://localhost:8080/odonto/dentistas', dentista)
    .then((res) => {

      const newState = [...this.state.dentistas, res.data]

      this.setState({
        dentistas: newState
      })
      
    });

  }

  render(){
    return (
      <div>
        <Formulario enviarDados={this.enviarDados}/>
        <Tabela listaDentistas={this.state.dentistas} />
      </div>
    );
  }
  
}

export default App;
