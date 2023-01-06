import {React, useState} from 'react';
import './cardPage.scss'
import Card from '../../components/card/Card';
import MyInput from '../UI/input/MyInput';

const CardPage = ({arr, titleLine, isBest}) => {
    const [state, setState] = useState(arr);
    console.log(state);

    return (
        <div className={isBest ? 'cardPage ' + "best" : "cardPage" }>
            { titleLine ? <div className='line'></div> : <div className='title'>Our best</div> }
            { titleLine ? <MyInput/> : null }
            <div className="container">
                <div className="wr">
                    {state.map((element) => {
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

