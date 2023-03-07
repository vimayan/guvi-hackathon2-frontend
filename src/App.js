import Login from './components/login';
import Register from './components/register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';

import Booking from './components/booking';
import Payment from './components/payment';
import Screens from './components/screens';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register></Register>} />
      <Route path ="/home" element={<Home/>}/>
      <Route path='/screens' element={<Screens/>}/>
      <Route path='/booking' element={ <Booking/>}/>
      <Route path='/payment' element={<Payment/>}/>
      </Routes>
      </BrowserRouter>    
     
    </div>
  );
}

export default App;
