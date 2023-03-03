import Login from './components/login';
import Register from './components/register';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Seating from './components/seating';
import Booking from './components/booking';

function App() {
  return (
    <div className="App">
            
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register></Register>} />
      <Route path ="/home" element={<Home/>}/>
      <Route path='/booking' element={ <Booking/>}/>
      </Routes>

     
    </div>
  );
}

export default App;
