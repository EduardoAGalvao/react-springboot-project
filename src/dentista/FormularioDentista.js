import React, { Component } from 'react'

class FormularioDentista extends Component{
    //Utilizando construtor para setar o state vazio na construção da aplicação
    constructor(props){
        super(props)

        this.stateInicial = {
            codigo: '',
            nome: '',
            cro: '',
            email: '',
            telefone: ''
        }

        this.state = this.stateInicial;
    }

    //Listener de mudança de valor do input
    inputHandler = (event) => {

        const {name, value} = event.target

        this.setState({

            //Utilizando [] para pegar a propriedade do json
            //name será o name do objeto que setou o evento
            //value será o valor do objeto que setou o evento
            [name]: value
        });

    }

    submitHandler = (event) =>{

        event.preventDefault();

        this.props.enviarDados(this.state);

        this.setState(this.stateInicial);

    }

    render(){
        //Criando variáveis por interpolação
        const {codigo, nome, cro, telefone, email} = this.state;
        
        return(
            <div className="card">
                <div className="card-header">
                    <h5>Cadastro de dentistas</h5>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <form>
                            <label htmlFor="codigo">Código:</label>
                            <input className="form-control" type="text" id="codigo" name="codigo" value={codigo} onChange={this.inputHandler}/>

                            <label htmlFor="nome">Nome:</label>
                            <input className="form-control" type="text" id="nome" name="nome" value={nome} onChange={this.inputHandler}/>

                            <label htmlFor="cro">CRO:</label>
                            <input className="form-control" type="text" id="cro" name="cro" value={cro} onChange={this.inputHandler}/>

                            <label htmlFor="telefone">Telefone:</label>
                            <input className="form-control" type="text" id="telefone" name="telefone" value={telefone} onChange={this.inputHandler}/>

                            <label htmlFor="email">Email:</label>
                            <input className="form-control" type="text" id="email" name="email" value={email} onChange={this.inputHandler}/>

                            <button type="submit"  className="btn btn-success form-control mt-5" onClick={this.submitHandler}>Gravar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormularioDentista

