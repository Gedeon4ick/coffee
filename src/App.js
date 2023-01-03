import  {React, useState} from 'react';
import './style/style.scss';

import MyMenu from './components/menu/MyMenu';



function App() {
  // const [location, setLocation] = useState({location: 'en'})

  const nameMenu = [
    {id: 1, name: 'Coffee house'},
    {id: 2, name: 'Our coffee'},
    {id: 3, name: 'For your pleasure'},
  ]

  return (
    <div className="App">
      <MyMenu nameMenu={nameMenu}/>
    </div>
  );
}

export default App;
