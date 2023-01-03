import React from 'react';
import './MyTitul.scss'
import Hr from '../UI/hr/Hr'
import Title from '../UI/title/Title';

const MyTitul = () => {
    return (
        <div className='titul'>
            <Title/>
            <Hr/>
            <div className="descr">
            We makes every day full of energy and taste
            Want to try our beans?
            </div>
            <button>
                 More
            </button>
        </div>
    );
};

export default MyTitul;