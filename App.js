import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Search from './components/search';
import Reg from './components/register';
import Pat from './components/patients';
import Doctor from './components/doctor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search/>}/>
          <Route path='/log' element={<Login/>}/>
          <Route path='/patient' element={<Reg/>}/>
          <Route path='/details' element={<Pat/>}/>
          <Route path='/doc' element={<Doctor/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;