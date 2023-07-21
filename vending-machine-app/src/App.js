import './App.css';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import Chips from './components/Chips';
import ProteinBar from './components/ProteinBar';
import Candy from './components/Candy';
import VendingMachine from './components/VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<VendingMachine/>}/>
          <Route exact path='/Chips' element={<Chips/>}/>
          <Route exact path='/ProteinBar' element={<ProteinBar/>}/>
          <Route exact path='/Candy' element={<Candy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
