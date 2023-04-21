import './App.css';
import {useLocation,Route,Routes,useNavigate,Router} from 'react-router-dom';

import Tarjetas from './components/Tarjetas/Tarjetas';

import Detail from './components/Detail/Detail';
import LadingPage from './components/Ladingpage/LadingPage';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';


function App() {
  
  const { pathname } = useLocation();
  return (
    
    <div className="App">
      {pathname !=="/"  && <Nav/>}
      <Routes>
        <Route path="/" element={<LadingPage/>}></Route>
        <Route path="/home" element={<Tarjetas/>}></Route>
        <Route path="/detail/:detailId" element={<Detail/>}></Route>
        <Route path='/foRM' element={<Form></Form>}></Route>
      </Routes>
    </div>
  );
}

export default App;
