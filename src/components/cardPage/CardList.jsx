import React from 'react';
import './cardPage.scss'
import Card from '../../components/card/Card';

const CardPage = ({arr}) => {
    return (
        <div className='cardPage'>
            {arr.map((element) => {
                return <Card element={element} key={element.id}/>
            })}
        </div>
    );
};

export default CardPage;

