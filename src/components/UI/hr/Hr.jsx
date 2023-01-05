import React from 'react';
import list from '../../../icons/list.svg';
import blackList from '../../../icons/black-list.png';
import './Hr.scss'

const Hr = ({black}) => {
    return (
        <div>
            <div className="container">
                <div className="wrapper">
                    {black ? <div className='hr_black'></div> : <div className='hr'></div>}
                    {black ? <img src={blackList} alt="list" /> : <img src={list} alt="list" />}
                    {black ? <div className='hr_black'></div> : <div className='hr'></div>}
                </div>
            </div>
        </div>
    );
};

export default Hr;