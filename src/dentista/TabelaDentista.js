import React, { Component } from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa'

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>CODIGO</th>
                <th>NOME</th>
                <th>TELEFONE</th>
                <th colSpan="2">AÇÕES</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {

    const {excluirDentista, consultarDentista} = props;
    
    const dentistas = props.dentistas.map((dentista) => {
        return(
            <tr key={Math.random()} >
                <td>{dentista.codigo}</td>
                <td>{dentista.nome}</td>
                <td>{dentista.telefone}</td>
                <td><button className="btn btn-warning" onClick={() => consultarDentista(dentista.codigo)}><FaPencilAlt/></button></td>
                <td><button className="btn btn-danger" onClick={() => {
                    if(window.confirm('Confirma a exclusão?')){
                        return excluirDentista(dentista.codigo)
                    }
                }}><FaTrashAlt/></button></td>
            </tr>
        )
    })
    
    return (

        <tbody>
            {dentistas}
        </tbody>
    )

}

class TabelaDentista extends Component {

    render() {

        const {listaDentistas, excluirDentista, consultarDentista} = this.props;
        console.log(listaDentistas)

        return (
            <div className="card">
                <div className="card-header">
                    <h5>Lista de Dentistas</h5>
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <TableHead />
                        <TableBody dentistas={listaDentistas} excluirDentista={excluirDentista} consultarDentista={consultarDentista}/>
                    </table>
                </div>
            </div>
        )
    }
}

export default TabelaDentista