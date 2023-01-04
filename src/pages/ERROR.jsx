import React from 'react';
import { Link } from 'react-router-dom'

const ERROR = () => {
    return (
        <div>
            <h1>Страницы не существует </h1>
            <Link to={'./'} style={{border: '1px solid black', padding: '10px', textDecoration: 'none'}}>Вернуться на главную страницу</Link>
        </div>
    );
};

export default ERROR;