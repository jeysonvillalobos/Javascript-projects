import React,{ Component } from 'react';
import './CSS/Countrie.css';

import Menu from '../components/Menu';

class Countrie extends Component {

    state = {
        countrie:[]
    }

    componentDidMount(){
        fetch(`https://restcountries.eu/rest/v2/name/${this.props.match.params.name}`)
        .then(rel => rel.json())
        .then(rel => this.setState({countrie:rel}));
    }       

    render(){
        return(
            <div className="Countrie">
                <Menu />    

                <div className="countrieDiv">
                    {this.state.countrie.map((data,index)=>(

                        <div key={index} className="infoCountrie">
                            <h2>{data.name}</h2>
                            <p>Capital:{data.capital}</p>
                            <p>Moneda: {data.currencies[0].name}</p>
                            <p>Idioma:{data.languages[0].name}</p>
                            <p>Idioma nativo:{data.languages[0].nativeName}</p>
                            <p>Region: {data.region}</p>
                            <p>Bandera:</p>
                            <img src={data.flag} alt="" width="100px"/>
                        </div>

                    ))}
                </div>
                

            </div>
        );
    }
}

export default Countrie;