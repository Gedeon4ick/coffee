import React from 'react';
import list from '../../../icons/list.svg';
import line from '../../../icons/Line.svg'
import './Hr.scss'

const Hr = () => {
    return (
        <div>
            <div className="container">
                <div className="wrapper__hr">
                    <img src={line} alt="line" />
                    <img src={list} alt="list" />
                    <img src={line} alt="line" />
                </div>
            </div>
        </div>
    );
};

export default Hr;