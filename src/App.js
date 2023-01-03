import  {React} from 'react';
import './style/style.scss';
import Nav from './components/nav/Nav';
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
      <Nav  nameMenu={nameMenu}/>
    </div>
  );
}

export default App;
