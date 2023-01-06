import React from 'react';
import './myInput.scss'

const MyInput = () => {
    const [filter, setFilter] = React.useState("");
    console.log(filter);
    return (
        <div className='cont'>
            <div className="input">
                <label>Lookiing for</label>
                <input 
                    value={filter}
                    onChange={({ target: { value } }) => setFilter(value)}
                    placeholder="start typing here..."
                    type="text"
                />
            </div>
            <div className="filter">
                <div className="filter__title">
                    Or filter
                </div>
                <div className="filter__btn">
                    <button>Brazil</button>
                    <button>Kenya</button>
                    <button>Columbia</button>
                </div>
            </div>
        </div>
    );
};

export default MyInput;