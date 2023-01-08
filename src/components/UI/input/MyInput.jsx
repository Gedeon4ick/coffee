import React from 'react';
import './myInput.scss'

const MyInput = ({ onInputChange, filter, currentCountry, country }) => {

    
    return (
        <div className='cont'>
            <div className="input">
                <label>Lookiing for</label>
                <input 
                    value={filter}
                    onChange={(e) => onInputChange(e.target.value)}
                    placeholder="start typing here..."
                    type="text"
                />
            </div>
            <div className="filter">
                <div className="filter__title">
                    Or filter
                </div>
                <div className="filter__btn">
                    <button value={"Brazil"} className={ country=="Brazil" ? "active" : null } onClick={(e) => {
                        currentCountry(e.target.value)
                    }}>Brazil</button>
                    <button value={"Kenya"} className={ country=="Kenya" ? "active" : null }  onClick={(e) => currentCountry(e.target.value)}>Kenya</button>
                    <button value={"Columbia"} className={ country=="Columbia" ? "active" : null }  onClick={(e) => currentCountry(e.target.value)}>Columbia</button>
                </div>
            </div>
        </div>
    );
};

export default MyInput;