import React, { Component } from 'react';

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
    
    const dentistas = props.dentistas.map((dentista) => {
        return(
            <tr key={Math.random()} >
                <td>{dentista.codigo}</td>
                <td>{dentista.nome}</td>
                <td>{dentista.telefone}</td>
                <td><button className="btn btn-warning">Editar</button></td>
                <td><button className="btn btn-danger">Excluir</button></td>
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

        const {listaDentistas} = this.props;
        console.log(listaDentistas)

        return (
            <table className="table table-hover">
                <TableHead />
                <TableBody dentistas={listaDentistas}/>
            </table>
        )
    }
}

export default TabelaDentista