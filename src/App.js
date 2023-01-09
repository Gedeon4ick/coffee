import  {React} from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Redirect } from 'react-router-dom';
import './style/style.scss';
import Home from './pages/Home';
import Our from './pages/Our';
import FYP from './pages/FYP';   
import ERROR from './pages/ERROR';



function App() {
  // const [location, setLocation] = useState({location: 'en'})

  const nameMenu = [
    {id: 1, name: 'Coffee house', to: '/'},
    {id: 2, name: 'Our coffee', to: '/Our'},
    {id: 3, name: 'For your pleasure', to: '/FYP'},
  ]
 

  return (
      <HashRouter>
        <Routes>
            <Route exact path="/" element={<Home nameMenu={nameMenu}/>}/>
            <Route path="/Our" element={<Our nameMenu={nameMenu}/>}/>
            <Route  path="/FYP" element={<FYP nameMenu={nameMenu}/>}/>
            <Route path="*" element={<ERROR/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
