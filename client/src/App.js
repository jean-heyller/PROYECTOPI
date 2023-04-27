import './App.css';
import {useLocation,Route,Routes,} from 'react-router-dom';

import Cards from './components/Cards/Cards';
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
        <Route path="/home" element={<Cards/>}></Route>
        <Route path="/detail/:detailId" element={<Detail/>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
      </Routes>
    </div>
  );
}

export default App;
