import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Home.css';

import Menu from '../components/Menu';

class Home extends Component {

    state = {
        countries:[],
        searched:[]
    }

    componentDidMount(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(rel => rel.json())
        .then(rel => this.setState({countries:rel}));
    }

    render(){
        return(
            <div className="Home">
                <Menu />   
                <div className="countries">
                    {this.state.countries.map((data,index)=>(
                        <Link  key={index} className="link" to={`countrie/${data.name}`}>
                            <div className="countrie">
                                <h2>{data.name}</h2>
                                <img src={data.flag} alt="" width='50px'/>
                            </div>
                        </Link>
                    ))}
                    
                    
                </div>

            </div>
        );
    }
}

export default Home;