import {React, useState} from 'react';
import './cardPage.scss'
import Card from '../../components/card/Card';
import MyInput from '../UI/input/MyInput';

const CardPage = ({arr, titleLine, isBest}) => {
    
    const [filter, setFilter] = useState("");
    const [country, setCountry] = useState("");

    let data = arr;

    const changeCountry = (e) => {
        if (country === e) {
            setCountry("")
        } else {
            setCountry(e)
        }
    }

    if (filter !== '') {
        data = data.filter(element => element.title.toLowerCase().includes(filter.toLowerCase()))
    }
    if (country !== '') {
        data = data.filter(element => element.country.includes(country))
    }

    return (
        
        <div className={isBest ? 'cardPage ' + "best" : "cardPage" }>
            { titleLine ? <div className='line'></div> : <div className='title'>Our best</div> }
            { titleLine ? 
            <MyInput 
                filter={filter}
                onInputChange={setFilter}
                currentCountry={changeCountry}
                country={country} 
            /> 
            : null }
            <div className="container">
                <div className="wr">
                    {data.map((element) => {
                        if (isBest) {
                            if (element.isBest) {
                                return<Card  element={element} key={element.id}/>
                            }
                        }else {
                            return <Card titleLine={true} element={element} key={element.id}/>
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default CardPage;

