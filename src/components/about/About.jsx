import React from 'react';
import Hr from '../UI/hr/Hr';
import './about.scss'

const About = ({content, aboutImg, myRef}) => {
    const {title, descr} = content
    return (
        <div className='container'>
            <div className="wr" ref={myRef}>
                { aboutImg ? <img src={aboutImg} alt='aboutImg'/> : null }
                <div className="wrapper__about">
                    <div className='wrapper__about_title'>{title}</div>
                    <Hr black={true}/>
                    <div className='wrapper__about_descr'>{descr}</div>
                </div>
            </div>
        </div>
    );
};

export default About;