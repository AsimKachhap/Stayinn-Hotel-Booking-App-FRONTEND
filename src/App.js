import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import HotelsList from './pages/HotelsList'
import Login from './pages/Login';
import AddingRoomForm from './pages/AddingRooms/AddingRoomForm';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home /> } />
      <Route path= '/hotel/:id' element = {<Hotel />} />
      <Route path= '/hotelslist' element = {<HotelsList />} />
      <Route path= '/user/login' element = {<Login />} />
      <Route path= '/admin/addrooms' element = {<AddingRoomForm />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
