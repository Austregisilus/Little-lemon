import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import { Menu } from './Pages/Menu';
import Reservation from './Pages/Reservation';
import './index.css';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='mx-auto'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Reservation" element={<Reservation/>}></Route>
          <Route path="/Menu" element={<Menu/>}></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
