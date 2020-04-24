import React, { Component } from 'react';
import { connect } from 'react-redux';

//Actions
import { ACTUALIZAR, ELIMINAR } from '../../Redux/Actions/taskAction';

class Table extends Component {

    actualizar(e){
        this.props.ACTUALIZAR(e);
    }


    render(){
        let finalizadaStyle;
        let button;

        button = this.props.finalizada ? 
                    <button className="button buttonDesmarcar" onClick={this.actualizar.bind(this,this.props.id)}>Desmarcar</button> :
                    <button className="button buttonTerminar" onClick={this.actualizar.bind(this,this.props.id)}>Terminar</button>;
        
        finalizadaStyle = this.props.finalizada ? {backgroundColor:'#7eff8b'} : {};

        return(
            <tr id={this.props.id} className="trSinTerminar" style={ finalizadaStyle }>
                <td>{this.props.nombre}</td>
                <td>{button}</td>
                <td><button className="button buttonEliminar">Eliminar</button></td>
            </tr>          
        )
    }

}

const mapStateToDispatch = () => ({
    ACTUALIZAR,
    ELIMINAR
});

export default connect(null,mapStateToDispatch())(Table);