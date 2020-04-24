import React from 'react';
import './CSS/notFound.css';

import Menu from '../components/Menu';

const notFound = () => (
    <div className="notFound">
        <Menu/>
        <h1 className="errorText">Error pagina no encontrada.</h1>
    </div>
);

export default notFound;