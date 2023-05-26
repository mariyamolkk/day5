import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Narnia from './components/Narnia';
import StateBasics from './components/StateBasics';
import Statex from './components/Statex';
import Table1 from './components/Table1';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './components/ApiGet';
import Table2 from './components/Table2';
import Appw from './components/Appw';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Narnia/>
    
      <Routes>
        <Route path='/' element={<Project/>}/>
        <Route path='/add' element={<Appw data={{sname:'',sgrade:''}}method= "post"/>}/>
      </Routes>
    </div>
  );
}

export default App;