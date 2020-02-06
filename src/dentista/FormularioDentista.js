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
    render(){
        return(
            <form>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" />

                <label htmlFor="cro">CRO:</label>
                <input type="text" id="cro" name="cro" />

                <label htmlFor="telefone">Telefone:</label>
                <input type="text" id="telefone" name="telefone" />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" />

                <button type="submit">Gravar</button>

            </form>
        );
    }
}

export default FormularioDentista

