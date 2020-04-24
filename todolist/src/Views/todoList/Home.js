import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';

//Actions
import { INSERTAR } from '../../Redux/Actions/taskAction';

//Componets
import Table from '../../Components/Table/Table';

class Home extends Component {

    onKeyPress(e){
        if(e.charCode === 13 && e.target.value.length > 0)
        {
            this.props.INSERTAR(e.target.value);
            e.target.value = "";
        }
    }

    render(){
        var table;

        if(this.props.taskReducer.length > 0 )
        {
            table = (
            <table>
                <tbody>
                    <tr className="titleTable">
                        <th>Tarea</th>
                        <th>Tarea terminada</th>
                        <th>Eliminar</th>
                    </tr>
                    {this.props.taskReducer.map(data => (
                        <Table key={data.id} id={data.id} nombre={data.nombre} finalizada={data.finalizada} />
                    ))}
                </tbody>
            </table>);

        } else {
            table = <h3>No hay datos agregados</h3>;
        }


        return(
            <div>
                <div className="nav">
                    <h1>TodoList</h1>
                </div>

                <div className="main">
                    <input type="text" placeholder="Agregar una tarea" className="txtAgregar" autoFocus onKeyPress={this.onKeyPress.bind(this)}/>
                    { table }
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => ({
    taskReducer:state.taskReducer
});

const mapStateToDispatch = () => ({
    INSERTAR
});

export default connect(mapStateToProps,mapStateToDispatch())(Home);