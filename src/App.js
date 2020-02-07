import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './dentista/TabelaDentista'
import Formulario from './dentista/FormularioDentista'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './componentes/Navbar'

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

  excluirDentista = (codigo) => {
    axios.delete('http://localhost:8080/odonto/dentistas/' + codigo)
      .then((res) => {
        if(res.status === 204){
          const dentistasAtuais = this.state.dentistas.filter((dentista) => dentista.codigo !== codigo);
          this.setState({
            dentistas: dentistasAtuais
          })
        }
      })
  }

  consultarDentista = (codigo) => {

    const dentista = this.state.dentistas.filter((dentista) => dentista.codigo === codigo)
    console.log(dentista)

  }

  render(){
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-4"> 
              <Formulario enviarDados={this.enviarDados}/>
            </div>
            <div className="col-md-8">
              <Tabela listaDentistas={this.state.dentistas} excluirDentista={this.excluirDentista} consultarDentista={this.consultarDentista}/>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  
}

export default App;
