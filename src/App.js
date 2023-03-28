import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage'
import AboutUs from './Pages/AboutUs/AboutUs'
import Footer from './Components/Footer/Footer';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
   </>
  );
}

export default App;
